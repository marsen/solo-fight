import { BaseController } from '../src/controllers/baseController'
import httpMocks from 'node-mocks-http'
import type { MockResponse, MockRequest } from 'node-mocks-http'
import type { Request, Response } from 'express'

describe('Health Check', () => {
  let target: BaseController
  let req: MockRequest<Request>
  let res: MockResponse<Response>
  beforeEach(() => {
    target = new BaseController()
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
  })
  it('should return status OK', () => {
    // Arrange
    const mockDate = new Date('2023-11-11T08:05:47Z')
    jest.spyOn(global, 'Date')
      .mockImplementation(() => mockDate)
    // 將 response.status 和 response.json 轉換為 Jest mock 函數
    res.status = jest.fn().mockReturnThis()
    res.json = jest.fn()
    // Act
    target.healthCheck(req, res)
    // Assert
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ status: 'OK', timestamp: mockDate.toISOString() })
  })
})
