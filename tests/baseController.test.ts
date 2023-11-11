import { BaseController } from '../src/controllers/baseController'
import httpMocks from 'node-mocks-http'

describe('Health Check', () => {
  it('should return status UP', () => {
    const controller = new BaseController()
    const request = httpMocks.createRequest()
    const response = httpMocks.createResponse()

    controller.healthCheck(request, response)

    expect(response.status).toHaveBeenCalledWith(200)
    expect(response.json).toHaveBeenCalledWith({ status: 'UP' })
  })
})
