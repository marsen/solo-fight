import 'reflect-metadata'
import { type Request, type Response } from 'express'
import CorsController from '../src/controllers/corsController'
import type IApiService from '../src/interfaces/services/apiService'

describe('Proxy Controller', () => {
  let target: CorsController
  let mockReq: Partial<Request>
  let mockRes: Partial<Response>
  let mockImageUrl: string
  beforeEach(() => {
    mockImageUrl = 'http://mock.api/fake.jpg'
    mockReq = {}
    mockRes = {
      send: jest.fn(),
      setHeader: jest.fn()
    }
  })

  it('should fetch image from url and return it', async () => {
    // arrange
    const mockImageData = Buffer.from('mock image data')
    mockReq.query = { url: mockImageUrl }
    const mockApiService: IApiService = {
      fetchImage: jest.fn().mockResolvedValue({ buffer: mockImageData, headers: { 'content-type': 'image/jpeg' } }),
      fetchData: jest.fn().mockResolvedValue('mock data')
    }
    target = new CorsController(mockApiService)

    // act
    await target.getImage(mockReq as Request, mockRes as Response)

    // assert
    expect(mockApiService.fetchImage).toHaveBeenCalledWith(mockImageUrl)
    expect(mockRes.send).toHaveBeenCalledWith(mockImageData)
  })

  it('should throw BadRequestError when content-type is missing', async () => {
    // arrange
    mockReq.query = { url: mockImageUrl }
    const mockApiService: IApiService = {
      fetchImage: jest.fn().mockResolvedValue({ buffer: Buffer.from(''), headers: {} }),
      fetchData: jest.fn().mockResolvedValue('mock data')
    }
    target = new CorsController(mockApiService)

    // act and assert
    await expect(target.getImage(mockReq as Request, mockRes as Response)).rejects.toThrow('Invalid image url')
  })
})
