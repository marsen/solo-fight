import "reflect-metadata";
import * as dotenv from 'dotenv';
import { injectable } from 'inversify';


@injectable()
class EnvConfigService implements Configuration{
  constructor(){
    if (process.env["NODE_ENV"] !== 'production') {
      dotenv.config();
    }
  }

  public get(key:string):string {
    return process.env[key];
  }
}

export default EnvConfigService