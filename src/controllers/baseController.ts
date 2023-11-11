import { type Request, type Response } from 'express'

export class BaseController {
  public healthCheck (req: Request, res: Response): void {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() })
  }
}
