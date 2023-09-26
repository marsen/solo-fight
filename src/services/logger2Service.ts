class LoggerService {
  public log(message?: string, ...metadata: any) {
    console.log(`Log2:${message}`, metadata);
  }
}

export default LoggerService