import { BaseController } from '../src/controllers/baseController'
import httpMocks from 'node-mocks-http'

describe('Health Check', () => {
  it('should return status OK', () => {
    const controller = new BaseController()
    const request = httpMocks.createRequest()
    const response = httpMocks.createResponse()
    // 將 response.status 和 response.json 轉換為 Jest mock 函數
    response.status = jest.fn().mockReturnThis()
    response.json = jest.fn()

    controller.healthCheck(request, response)
    expect(response.status).toHaveBeenCalledWith(200)
    expect(response.json).toHaveBeenCalledWith({ status: 'OK' })
  })
})
