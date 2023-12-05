import type { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { z } from 'zod'
import IApiService from '../interfaces/services/apiService'
import TYPES from '../types'

const GetImageSchema = z.object({
  url: z.string().url()
})

@injectable()
export default class ProxyController {
  constructor (@inject(TYPES.ApiService) private readonly apiService: IApiService) {
    this.apiService = apiService
  }

  getImage = async (req: Request, res: Response): Promise<void> => {
    const { url } = GetImageSchema.parse(req.query)
    const { buffer, headers } = await this.apiService.fetchImage(url)
    const contentType: string = headers['content-type']?.toString() ?? ''

    if ((contentType == null) || !contentType.startsWith('image/')) {
      throw new Error('Invalid image url')
    }

    res.setHeader('Content-Type', contentType)

    res.send(buffer)
  }
}
