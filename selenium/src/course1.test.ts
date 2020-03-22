import { Builder, WebDriver, By, WebElement } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import until from 'selenium-webdriver/lib/until';
import chromedriver from 'chromedriver';
import fs from 'fs-extra';
import assert from 'assert';

// スクリーンショット拡張
declare module 'selenium-webdriver' {
  interface WebDriver {
    saveScreenshot(name: string): void;
  }
}

describe('テスト: コース１', function() {
  const basePath = './results/course1';

  // mochaのタイムアウト設定（60秒）
  this.timeout(60000);

  const target = {
    name: "chrome"
  };

  // 結果出力先のディレクトリ
  const outPath = `${basePath}/${target.name}`;

  // 実施環境ごとのテスト
  describe(`ブラウザ: ${target.name}`, function() {
    let driver: WebDriver;

    // テスト前処理
    before(async function() {

      // 結果出力ディレクトリの生成
      fs.mkdirsSync(outPath);

      // Webドライバの設定
      chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
      const options = new chrome.Options()
        .windowSize({ width: 1280, height: 720 })
        .headless();  // ブラウザ上で動かす場合は、headless()をコメントアウトする
      driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
      WebDriver.prototype.saveScreenshot = async (filePath: string) => {
        return driver.takeScreenshot().then(data => {
          fs.writeFileSync(filePath, data, 'base64');
        });
      };
    });

    // テスト処理
    it('実行', async function() {

      // トップ画面に遷移
      await driver.get('http://127.0.0.1:3000/practice_autotest/');
      driver.saveScreenshot(`${outPath}/top.png`);

      // コース１を選択
      await driver.findElement(By.xpath('//h6[text()="コース１：検索"]')).click();
      driver.saveScreenshot(`${outPath}/course1.png`);

      // ヘルプマークをマウスオーバーして、ツールチップを表示する
      const help = await driver.findElement(By.css('h3 > svg')); // css selector
      await hover(driver, help);
      const tooltip = await driver.findElement(By.xpath('//div[@role="tooltip"]')).getText();
      assert.ok(tooltip.match(/^レッドリストとは/), 'ヘルプマークをマウスオーバーすると、ツールチップが表示されること');
      driver.saveScreenshot(`${outPath}/help_tooltip.png`);

      // カテゴリ選択
      await driver.findElement(By.id('mui-component-select-category')).click(); // id selector
      await driver.findElement(By.xpath('//li[text()="絶滅"]')).click();

      // 検索ボタン押下
      await driver.findElement(By.xpath('//button/span[text()="検索"]')).click(); // xpath

      // 検索結果が表示されるまで待機（最大５秒待機する）
      // FIXME xpathで簡潔にする
      const hitSelector = By.css('#root > div > main > div > div:nth-child(1) > div > div > div > div');
      await driver.wait(until.elementLocated(hitSelector), 5000);

      // 検索結果画面をスクリーンショット
      driver.saveScreenshot(`${outPath}/search_result.png`);

      // 検索結果の件数を確認
      const hit = await driver.findElement(hitSelector).getText();
      assert.equal(hit, '7件ヒット', '検索結果の件数が7件であること');
    });

    // テスト後処理
    after(async function() {
      await driver.quit();
    });
  });
})

// マウスオーバー処理
function hover(driver: WebDriver, element: WebElement) {
  const action = driver.actions();
  return action.move({ origin: element }).perform();
}
