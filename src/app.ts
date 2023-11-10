import express from 'express'
import { type Logger } from 'interfaces/utils/logger'
import { type Configuration } from 'interfaces/utils/configuration'
import router from './routers/index'
import container from './inversify.config'
import TYPES from './types'

const cfg = container.get<Configuration>(TYPES.Configuration)
const logger = container.get<Logger>(TYPES.Logger)
const app = express()

// Middleware 函數，用於在最後面加入日誌
app.use((req, res, next) => { // 添加自定义 metadata 到日志
  const customMetadata = {
    customKey: 'customValue'
  }

  logger.log('info', `Req start at: ${new Date()}}`, customMetadata)
  next() // 繼續執行下一個 middleware 或路由處理器
})
app.use(express.json())
app.use(router)

// Middleware 函數，用於在最後面加入日誌
app.use((req, res, next) => {
  logger.log('info', `Req end at: ${new Date()}}`, {
    customKey: 'customValue'
  })
  next() // 繼續執行下一個 middleware 或路由處理器
})

app.listen(cfg.get('PORT'), () => {
  console.log(`Server started at http://localhost:${cfg.get('PORT')}`)
})
