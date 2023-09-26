import { createLogger, format, transports } from 'winston';
import { LoggingWinston } from '@google-cloud/logging-winston';
import ConfigService from "./configService";
const cfg = new ConfigService();
const logger = createLogger({
  level: 'info', // 日志级别
  format: format.combine(
    format.timestamp(), // 添加时间戳
    format.errors({ stack: true }), // 添加错误堆栈信息
    format.json() // 输出日志为 JSON 格式
  ),
  transports: [
    new transports.Console(), // 将日志打印到控制台
    new LoggingWinston({
      projectId: cfg.Get('GCP_ID'), // 设置GCP项目ID
      keyFilename: cfg.Get('GCP_KEY_PATH') // 服务帐户密钥文件路径，如果已经配置了凭据文件的环境变量，可以省略
    }),
  ],
});

class GCPLoggerService {
  public log(message?: string, ...metadata: any[]) {
    logger.log('info', message, metadata);
  }
}

export default GCPLoggerService;