import { type Request, type Response } from 'express'
import { type FileService } from '../interfaces/utils/fileService'
import TYPES from '../types'
import { inject } from 'inversify'

export class BaseController {
  constructor (@inject(TYPES.FileService) private readonly fileService: FileService) {}
  public healthCheck (req: Request, res: Response): void {
    const version = this.fileService.readJson<{ version: string }>('./package.json').version
    res.status(200).json({ status: 'OK', version, timestamp: new Date().toISOString() })
  }
}
