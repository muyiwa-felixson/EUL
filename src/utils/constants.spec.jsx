import * as constants from './constants'

describe('constants', () => {
  it('basic constants are defined', () => {
    expect(constants.MAX_PAGE_SIZE).toEqual(5000)
  })
})
