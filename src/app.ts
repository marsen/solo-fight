import express from "express";
import router from "./routers/index";
import logger from "./gcp.logger";

const app = express();
const port = 3000;

// Middleware 函數，用於在最後面加入日誌
app.use((req, res, next) => {// 添加自定义 metadata 到日志
  const customMetadata = {
    customKey: 'customValue',
  };
  
  logger.warn('Req start at: ', customMetadata);
  console.log('Request received at:', new Date());
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  next(); // 繼續執行下一個 middleware 或路由處理器
});
app.use(express.json());
app.use(router)

// Middleware 函數，用於在最後面加入日誌
app.use((req, res, next) => {
  logger.error('Req end at: %s', new Date());
  console.log('Response sent at:', new Date());
  console.log('Response status:', res.statusCode);
  console.log('------------------------');
  next(); // 繼續執行下一個 middleware 或路由處理器
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
