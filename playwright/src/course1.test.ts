import { chromium, Browser, Page } from 'playwright';
import fs from 'fs-extra';
import assert from 'assert';

describe('テスト：コース１', function() {
  const outPath = './results/course1';
  let browser: Browser;
  let page: Page;

  // mochaのタイムアウト設定（60秒）
  this.timeout(60000);

  // テスト前処理
  before(async function() {
    // 結果出力ディレクトリの生成
    fs.mkdirsSync(outPath);

    // chromiumブラウザで実行
    browser = await chromium.launch({
      headless: false
    });
    page = await browser.newPage();
    page.setViewportSize({
      width: 1280,
      height: 720
    });
  });

  // テスト処理
  it('実行', async function() {
    // トップ画面に遷移
    await page.goto('http://127.0.0.1:3000/practice_autotest/');
    await page.screenshot({
      path: `${outPath}/top.png`,
      fullPage: true
    });

    // コース１を選択
    await page.click('text="コース１：検索"'); // text selector
    await page.screenshot({
      path: `${outPath}/course1.png`,
      fullPage: true
    });

    // ヘルプマークをマウスオーバーして、ツールチップを表示する
    await page.hover('h3 > svg'); // css selector
    await page.screenshot({
      path: `${outPath}/help_tooltip.png`,
      fullPage: true
    });

    // カテゴリ選択
    await page.click('#mui-component-select-category'); // css selector
    await page.click('text="絶滅"');
    await page.waitFor(1000);

    // 検索ボタン押下
    await page.click('xpath=//button/span[text()="検索"]'); // xpath
    await page.waitFor(1000);

    // 検索結果画面をスクリーンショット
    await page.screenshot({
      path: `${outPath}/search_result.png`,
      fullPage: true
    });

    // 検索結果の件数を確認
    const hit = await page.$eval('#root > div > main > div > div:nth-child(1) > div > div > div > div', (item: Element) => {
        return item.textContent;
    });
    assert.equal(hit, "7件ヒット");
  });

  // テスト後処理
  after (async function() {
    await browser.close();
  });
})
