import { BaseController } from '../src/controllers/baseController'
import httpMocks from 'node-mocks-http'

describe('Health Check', () => {
  it('should return status OK', () => {
    // Arrange
    const target = new BaseController()
    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    // 將 response.status 和 response.json 轉換為 Jest mock 函數
    res.status = jest.fn().mockReturnThis()
    res.json = jest.fn()
    // Act
    target.healthCheck(req, res)
    // Assert
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ status: 'OK' })
  })
})
