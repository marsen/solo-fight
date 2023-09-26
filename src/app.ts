import express from "express";
import router from "./routers/index";

import * as dotenv from 'dotenv';

import ConfigService from "services/configService";
import LoggerService from "services/loggerService";
import GCPLoggerService from "services/gcp.loggerService";

const gcplog = new GCPLoggerService();
const logging = new LoggerService();
const cfg = new ConfigService();
if (cfg.Get('NODE_ENV') !== 'production') {
  dotenv.config();
}

const app = express();
const port = cfg.Get('PORT');

// Middleware 函數，用於在最後面加入日誌
app.use((req, res, next) => {// 添加自定义 metadata 到日志
  const customMetadata = {
    customKey: 'customValue',
  };
  
  gcplog.log('Req start at: ', customMetadata);
  logging.log('Request received at:', new Date());
  logging.log('Request method:', req.method);
  logging.log('Request URL:', req.url);
  next(); // 繼續執行下一個 middleware 或路由處理器
});
app.use(express.json());
app.use(router)

// Middleware 函數，用於在最後面加入日誌
app.use((req, res, next) => {
  gcplog.log('Req end at: %s', new Date());
  logging.log('Response sent at:', new Date());
  logging.log('Response status:', res.statusCode);
  logging.log('------------------------');
  next(); // 繼續執行下一個 middleware 或路由處理器
});

app.listen(port, () => {
  logging.log(`Server started at http://localhost:${port}`);
});
