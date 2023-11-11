import { BaseController } from '../src/controllers/baseController'

describe('Health Check', () => {
  it('should return status UP', () => {
    const result = target.healthCheck()

    expect(result).toEqual({ status: 'UP' })
  })
})