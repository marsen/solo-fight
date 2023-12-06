import { Container } from 'inversify'
import { type Configuration } from './interfaces/utils/configuration'
import { type Logger } from './interfaces/utils/logger'
import TYPES from './types'
import EnvConfigService from './utils/env.configuration'
import diskFileService from './services/fsFileService'
import { type FileService } from './interfaces/utils/fileService'
import loggerWinston from './utils/logger.winston'

const container = new Container()
container.bind<Configuration>(TYPES.Configuration).to(EnvConfigService)
container.bind<Logger>(TYPES.Logger).to(loggerWinston)
container.bind<FileService>(TYPES.FileService).to(diskFileService)

export default container
