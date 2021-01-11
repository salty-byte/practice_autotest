# Playwright demo ![Playwright](https://github.com/salty-byte/practice_autotest/workflows/playwright/badge.svg)

Tests for sample_web with [Playwright](https://github.com/microsoft/playwright).

## Playwright information

| Version |
| :------ |
| 1.7.1   |

## Require

```
Ubuntu 20.04 LTS
node: 14.x
```

## Install

```sh
$ git clone https://github.com/salty-byte/practice_autotest.git
$ cd playwright
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

2. Run tests in playwright directory

```sh
$ npm test
```

## Tips

#### Run browser in non-headless mode

```typescript
browser = await target.type.launch({
  headless: false, // default is true
});
```

## License

[MIT](https://github.com/salty-byte/practice_autotest/blob/master/LICENSE)

## Author

[salty-byte](https://github.com/salty-byte/)
