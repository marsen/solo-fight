import { type Logger } from '../interfaces/utils/logger'
import { injectable } from 'inversify'

/**
 * @deprecated `consoleLoggerService` is deprecated. Please use `loggerWinston` instead.
 */
@injectable()
class consoleLoggerService implements Logger {
  public log (level: string, message: string, ...meta: object[]): void {
    console.log(`${level}:${message}`)
    console.log(`meta:${meta.toString()}`)
  }
}

export default consoleLoggerService
