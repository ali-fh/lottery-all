import Util from '../../src/Util'

test('整数保留一位小数', () => {
  expect(Util.toFixed(12345, 1)).toBe('12345.0')
})
test('两位浮点树保留一位小数', () => {
  expect(Util.toFixed(123.45, 1)).toBe('123.4')
})
test('两位浮点树保留三位小数', () => {
  expect(Util.toFixed(123.45, 3)).toBe('123.450')
})

test('两位浮点树保留三位小数', () => {
  expect(Util.getMaxCount('111223')).toBe(3)
})
