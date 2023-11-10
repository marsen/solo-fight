import { type Logger } from 'interfaces/utils/logger'
import { injectable } from 'inversify'

@injectable()
class consoleLoggerService implements Logger {
  public log (level: string, message: string, ...meta: object[]): void {
    console.log(`${level}:${message}`)
    console.log(`meta:${meta.toString()}`)
  }
}

export default consoleLoggerService
