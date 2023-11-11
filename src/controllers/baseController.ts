import { type Request, type Response } from 'express'

export class BaseController {
  public healthCheck (request: Request, response: Response): void {
    response.status(200).json({ status: 'UP' })
  }
}
