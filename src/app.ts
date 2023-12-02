import 'reflect-metadata'
import express from 'express'
import { type Configuration } from './interfaces/utils/configuration'
import router from './routers/index'
import container from './inversify.config'
import TYPES from './types'

const cfg = container.get<Configuration>(TYPES.Configuration)

const app = express()

app.use(express.json())
app.use('/', router)

app.listen(cfg.get('PORT'), () => {
  console.log(`Server started at http://localhost:${cfg.get('PORT')}`)
})
