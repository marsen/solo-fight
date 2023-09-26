class ConfigService {
  public Get(key:string) {
    return process.env[key];
  }
}

export default ConfigService