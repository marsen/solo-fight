# How Hot reload when typescript files change

## 目的

適用於開發階段，為了節省我們的開發時間，將自動化重新轉譯 ts 檔為 js，
並且不需重啟 web 服務。

## 作法

使用 `tsc -w` 指令，監控 `.ts` 檔的變化並觸發重新轉譯，
使用 `nodemon` 啟動服務，當 `.js` 有異動會熱重載服務，
使用 `concurrently` 合併以上的指令

## 必要的套件

- tsc
- nodemon
- concurrently

## package.json 的設定

```json
  "scripts": {
    "dev:build": "tsc -w",
    "dev:run": "nodemon dist/app.js",
    "dev": "concurrently yarn:dev:*"
  },
```