import { getQueryParams } from "./addQueryParams"

describe('shared/lib/addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({ test: 'value' })
    expect(params).toBe('?test=value')
  })
  test('test with two params', () => {
    const params = getQueryParams({
      test: 'value',
      test2: 'value2'
    })
    expect(params).toBe('?test=value&test2=value2')
  })
  test('test with undefind', () => {
    const params = getQueryParams({
      test: 'value',
      test2: undefined,
    })
    expect(params).toBe('?test=value')
  })
})