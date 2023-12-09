import 'reflect-metadata'
import type winston from 'winston'
import { createLogger, format, transports } from 'winston'
import { LoggingWinston } from '@google-cloud/logging-winston'
import * as dotenv from 'dotenv'
import { injectable } from 'inversify'
import { type Logger } from '../interfaces/utils/logger'

/**
 * @deprecated `gcpLoggerService` is deprecated. Please use `loggerWinston` instead.
 */
@injectable()
class gcpLoggerService implements Logger {
  private readonly logger: winston.Logger
  constructor () {
    if (process.env.NODE_ENV !== 'production') {
      dotenv.config()
    }
    // console.log(process.env["GCP_KEY_PATH"])
    // console.log(process.env["GCP_ID"])
    this.logger = createLogger({
      level: 'info', // 日志级别
      format: format.combine(
        format.timestamp(), // 添加时间戳
        format.errors({ stack: true }), // 添加错误堆栈信息
        format.json() // 输出日志为 JSON 格式
      ),
      transports: [
        new transports.Console(), // 将日志打印到控制台
        new LoggingWinston({
          projectId: process.env.GCP_ID, // 设置GCP项目ID
          keyFilename: process.env.GCP_KEY_PATH // 服务帐户密钥文件路径，如果已经配置了凭据文件的环境变量，可以省略
        })
      ]
    })
  }

  public log (level: string, message: string, ...meta: object[]): void {
    this.logger.log(level, message, meta)
  }
}

export default gcpLoggerService
