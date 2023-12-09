import 'reflect-metadata'
import winston, { createLogger, format, type transports } from 'winston'
import { LoggingWinston } from '@google-cloud/logging-winston'
import { inject, injectable } from 'inversify'
import { type Configuration } from '../interfaces/utils/configuration'
import { type Logger } from '../interfaces/utils/logger'
import TYPES from '../types'

@injectable()
class loggerWinston implements Logger {
  private readonly logger: winston.Logger
  constructor (@inject(TYPES.Configuration) private readonly _config: Configuration) {
    const transports: Array<LoggingWinston | transports.ConsoleTransportInstance> = [
      new winston.transports.Console()
    ]
    if (this._config.get('NODE_ENV') === 'production' || this._config.get('NODE_ENV') === 'qa') {
      this.logger = createLogger({
        level: 'info',
        format: format.combine(
          format.timestamp(),
          format.errors({ stack: true }), // stack trace
          format.json() // json format
        ),
        transports: [// transport to console
          new LoggingWinston({
            logName: this._config.get('GCP_LOGGING_LOG_NAME'),
            keyFilename: this._config.get('GCP_LOGGING_KEY_FILE'),
            projectId: this._config.get('GCP_PROJECT_ID')
          })
        ]
      })
    } else {
      this.logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
          winston.format.errors({ stack: true }),
          winston.format.colorize(),
          winston.format.simple()
        ),
        transports
      })
    }
  }

  public log (level: string, message: string, ...meta: object[]): void {
    this.logger.log(level, message, meta)
  }
}

export default loggerWinston
