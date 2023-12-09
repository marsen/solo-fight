import 'reflect-metadata'
import express from 'express'
import { type Configuration } from './interfaces/utils/configuration'
import router from './routers/index'
import container from './inversify.config'
import TYPES from './types'
import { type Logger } from './interfaces/utils/logger'

const cfg = container.get<Configuration>(TYPES.Configuration)
const logger = container.get<Logger>(TYPES.Logger)

const app = express()

app.use(express.json())
app.use('/', router)

app.listen(cfg.get('PORT'), () => {
  logger.log('info', `Server started at http://localhost:${cfg.get('PORT')}`)
})
