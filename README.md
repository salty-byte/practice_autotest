practice_autotest
========
![sample_web](https://github.com/salty-byte/practice_autotest/workflows/sample_web/badge.svg)
![Selenium](https://github.com/salty-byte/practice_autotest/workflows/selenium/badge.svg)
![Playwright](https://github.com/salty-byte/practice_autotest/workflows/playwright/badge.svg)  

A test automation practice project.

## Require

```
node: 12.x

// for selenium tests
chrome browser: latest
```

## Usage

1. Get resources
```sh
$ git clone https://github.com/salty-byte/practice_autotest.git
```

2. Start web server in sample_web directory
```sh
$ cd sample_web
$ npm install
$ npm run start
```

3. Run tests:

* Selenium
```sh
$ cd selenium
$ npm install
$ npm run build
$ npm test
```

* Playwright
```sh
$ cd playwright
$ npm install
$ npm run build
$ npm test
```

## License

[MIT](https://github.com/salty-byte/practice_autotest/blob/master/LICENSE)

## Author

[salty-byte](https://github.com/salty-byte/)
