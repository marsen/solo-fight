import express from "express";
import router from "./routers/index"

const app = express();
const port = 3000;

// Middleware 函數，用於在最後面加入日誌
app.use((req, res, next) => {
  console.log('Request received at:', new Date());
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  next(); // 繼續執行下一個 middleware 或路由處理器
});
app.use(express.json());
app.use(router)

// Middleware 函數，用於在最後面加入日誌
app.use((req, res, next) => {
  console.log('Response sent at:', new Date());
  console.log('Response status:', res.statusCode);
  console.log('------------------------');
  next(); // 繼續執行下一個 middleware 或路由處理器
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
