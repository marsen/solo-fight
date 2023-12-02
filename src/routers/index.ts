import express, { type Router } from 'express'
import { BaseController } from '../controllers/baseController'
import container from '../inversify.config'
import { type Logger } from '../interfaces/utils/logger'
import TYPES from '../types'

const router: Router = express.Router()
const logger = container.get<Logger>(TYPES.Logger)
const baseController = new BaseController()
// Middleware 函數，用於在最後面加入日誌
router.use((req, res, next) => { // 添加自定义 metadata 到日志
  const customMetadata = {
    customKey: 'customValue'
  }

  logger.log('info', `Req start at: ${new Date().toString()}}`, customMetadata)
  next() // 繼續執行下一個 middleware 或路由處理器
})
// 添加一個新的路由處理器
router.get('/health', (req, res) => {
  console.log('health')
  baseController.healthCheck(req, res)
})
router.use('/', (req, res, next) => {
  console.log('final')
  const result: HealthRes = { status: 'Error', version: 'beta.230903.3' }
  res.status(200).json(result)
})
// Middleware 函數，用於在最後面加入日誌
router.use((req, res, next) => {
  logger.log('info', `Req end at: ${new Date().toString()}}`, {
    customKey: 'customValue'
  })
  next() // 繼續執行下一個 middleware 或路由處理器
})

interface HealthRes {
  status: 'OK' | 'Error'
  version: string
}

export default router
