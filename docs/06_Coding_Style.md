# 使用工具檢查代碼

## ESLint

### typescript-eslint

首先，安裝必要的套件。在終端機中執行以下命令：

```shell
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```

建立一個 .eslintrc.js 檔案在您的專案根目錄下，並加入以下內容：

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // 在此添加自定義規則
  }
};
```

在 package.json 檔案中的 scripts 部分，加入一個用來執行 ESLint 的指令：

```json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx"
}
```

執行檢查 `yarn lint`

### 安裝 Microsoft 的 ESLint 規則

 `@microsoft/eslint-config-fast-dna` 是 Microsoft 提供的一組 ESLint 規則，  
 主要用於檢查 JavaScript 和 TypeScript 程式碼的風格和語法。  
 這組規則包含了一些常見的程式碼風格規則，例如變數命名、縮排、換行等，以及一些語法規則，例如禁止使用 `==`（要求使用 `===`）、禁止使用 `var`（要求使用 `let` 或 `const`）等。

其他參考資源：

- [ESLint 官方文件](https://eslint.org/docs/rules/)
  - 這裡列出了所有 ESLint 內建的規則，並且對每一條規則都有詳細的說明。
- [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
  - 這是一個收集了許多 ESLint 相關資源的列表，包括規則、插件、配置等。
- [npm](https://www.npmjs.com/)
  - 您可以在 npm 的網站上搜索 "eslint-config"，找到許多社區提供的 ESLint 規則集。
- [Fast ESLint Rules](https://github.com/microsoft/fast/blob/master/packages/utilities/fast-eslint-rules/.eslintrc.js)

## 參考

<https://typescript-eslint.io/getting-started/>

(fin)
