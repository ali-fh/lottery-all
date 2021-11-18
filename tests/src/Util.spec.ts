import Util from '../../src/Util'

describe('test Util', () => {
  describe('test toFixed function', () => {
    test('整数保留一位小数', () => {
      expect(Util.toFixed(12345, 1)).toBe('12345.0')
    })
    test('两位浮点树保留一位小数', () => {
      expect(Util.toFixed(123.45, 1)).toBe('123.4')
    })
    test('两位浮点树保留三位小数', () => {
      expect(Util.toFixed(123.45, 3)).toBe('123.450')
    })
  })

  describe('tesst getDuplicate function', () => {
    test('最大重复次数为3', () => {
      expect(Util.getDuplicate('111223')).toBe(3)
    })

    test('2的重复次数为2', () => {
      expect(Util.getDuplicate('111223', '2')).toBe(2)
    })

    test('2的重复次数为222', () => {
      expect(Util.getDuplicate(['02', '02', '02', '02', '02', '02', '03'])).toBe(6)
    })
  })
})
