# Selenium demo ![selenium](https://github.com/salty-byte/practice_autotest/workflows/selenium/badge.svg)

Tests for sample_web with [Selenium](https://www.selenium.dev/).

## Selenium information

| Version       |
| :------------ |
| 4.0.0-alpha.8 |

## Require

```
Ubuntu 20.04 LTS
node: 14.x
chrome browser: latest
```

### Install chrome browser

if chrome browser has not been installed yet

```sh
sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo apt update
sudo apt install google-chrome-stable
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
  .headless(); // if non-headless mode, comment out this line
driver = new Builder().forBrowser("chrome").setChromeOptions(options).build();
```

## License

[MIT](https://github.com/salty-byte/practice_autotest/blob/master/LICENSE)

## Author

[salty-byte](https://github.com/salty-byte/)
