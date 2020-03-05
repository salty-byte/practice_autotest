Selenium demo ![Selenium](https://github.com/salty-byte/practice_autotest/workflows/Selenium/badge.svg)
========
Tests for sample_web with [Selenium](https://www.selenium.dev/).

## Selenium information

|Language|Version|
|:---|:---|
|TypeScript|4.0.0-alpha.7|

## Require

```
node: 12.x
```

## Install

```sh
$ git clone https://github.com/salty-byte/practice_autotest.git
$ cd selenium
$ npm install
```

## Build

```sh
$ npm run build
```

## Run

1. Start web server in sample_web directory
```sh
$ npm run start
```

2. Run tests in selenium directory
```sh
$ npm test
```

## Tips

#### Run browser in headless mode using chrome browser
```typescript
const options = new chrome.Options()
  .windowSize({ width: 1280, height: 720 })
  .headless();  // if non-headless mode, comment out this line
driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();
```

## License

[MIT](https://github.com/salty-byte/practice_autotest/blob/master/LICENSE)

## Author

[salty-byte](https://github.com/salty-byte/)