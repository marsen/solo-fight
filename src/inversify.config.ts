import { Container } from 'inversify'
import { type Configuration } from 'interfaces/utils/configuration'
import { type Logger } from 'interfaces/utils/logger'
import TYPES from './types'
import EnvConfigService from './utils/env.configuration'
import gcpLoggerService from './utils/gcp.logger'
// import consoleLoggerService  from "./utils/console.logger";// you can inject other service

const container = new Container()
container.bind<Configuration>(TYPES.Configuration).to(EnvConfigService)
container.bind<Logger>(TYPES.Logger).to(gcpLoggerService)
// container.bind<Logger>(TYPES.Logger).to(consoleLoggerService);

export default container
