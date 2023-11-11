import { type Request, type Response } from 'express'

export class BaseController {
  public healthCheck (request: Request, response: Response): void {
    throw new Error('Method not implemented.')
  }
}
