# About Test

- Packages Install
- TDD
- Mock

## Packages Install

```shell
yarn add --dev jest ts-jest @types/jest
```

您需要在 Jest 的設定檔（通常是 `jest.config.js`）中設定 `ts-jest`。以下是一個基本的設定範例：

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

這樣，Jest 就會使用 `ts-jest` 來轉換 TypeScript 檔案，並且能夠正確地解析 `import` 語句了。

(fin)
