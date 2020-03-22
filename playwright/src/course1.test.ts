import pw from 'playwright';
import fs from 'fs-extra';
import assert from 'assert';

describe('テスト: コース１', function() {
  const basePath = './results/course1';
  let browser: pw.Browser;
  let page: pw.Page;

  // mochaのタイムアウト設定（60秒）
  this.timeout(60000);

  // テスト実施環境（ブラウザ）
  const targets = [
    { 'name': 'chromium', 'type': pw.chromium },
    { 'name': 'firefox', 'type': pw.firefox },
    { 'name': 'webkit', 'type': pw.webkit }
  ];

  for (const target of targets) {

    // 結果出力先のディレクトリ
    const outPath = `${basePath}/${target.name}`;

    // 実施環境ごとのテスト
    describe(`ブラウザ: ${target.name}`, function() {

      // テスト前処理
      before(async function() {

        // 結果出力ディレクトリの生成
        fs.mkdirsSync(outPath);

        // 指定のブラウザで実行
        browser = await target.type.launch({
          headless: true // ブラウザ上で動かす場合は、falseに設定
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
          path: `${outPath}/top.png`
        });

        // コース１を選択
        await page.click('text="コース１：検索"'); // text selector
        await page.screenshot({
          path: `${outPath}/course1.png`
        });

        // ヘルプマークをマウスオーバーして、ツールチップを表示する
        await page.hover('h3 > svg'); // css selector
        await page.waitFor(1000); // FIXME 要素が出力されるまで待機する
        const tooltip = await page.$eval('xpath=//div[@role="tooltip"]', (item: Element) => {
          return item.textContent || '';
        });
        assert.ok(tooltip.match(/^レッドリストとは/), 'ヘルプマークをマウスオーバーすると、ツールチップが表示されること');
        await page.screenshot({
          path: `${outPath}/help_tooltip.png`
        });

        // カテゴリ選択
        await page.click('#mui-component-select-category'); // css selector
        await page.click('text="絶滅"');
        await page.waitFor(1000); // FIXME 選択した値を適用するために待機する

        // 検索ボタン押下
        await page.click('xpath=//button/span[text()="検索"]'); // xpath

        // 検索結果が表示されるまで待機
        const hitSelector = '#root > div > main > div > div:nth-child(1) > div > div > div > div';
        await page.waitFor(hitSelector);

        // 検索結果画面をスクリーンショット
        await page.screenshot({
          path: `${outPath}/search_result.png`
        });

        // 検索結果の件数を確認
        const hit = await page.$eval(hitSelector, (item: Element) => {
          return item.textContent;
        });
        assert.equal(hit, '7件ヒット', '検索結果の件数が7件であること');
      });

      // テスト後処理
      after(async function() {
        await browser.close();
      });
    });
  }
})
