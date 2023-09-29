import { injectable } from "inversify";

@injectable()
class consoleLoggerService implements Logger {
  log(level: string, message: string, meta: any) {
    console.log(`${level}:${message}`)
  }
}

export default consoleLoggerService