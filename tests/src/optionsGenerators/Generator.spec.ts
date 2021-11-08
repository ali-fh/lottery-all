import BetOptionsGenerator from '../../../src/optionsGenerators/Generator'
import { OptionSection } from '../../../src/Interfases'

const betOptionsGenerator = new BetOptionsGenerator()
const options = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
let result: Array<OptionSection> = []

describe('测试 generatBetOptions', () => {
  test('生成不具标题的下注序列', () => {
    result = betOptionsGenerator.generatBetOptions(options, true)
    expect(result[0].label).toBe('')
    expect(result[0].quickSupport).toBe(true)
    expect(result.length).toBe(1)
  })

  test('生成有标题的下注序列', () => {
    result = betOptionsGenerator.generatBetOptions(options, false, ['万位', '千位'])
    expect(result[0].label).toBe('万位')
    expect(result[0].quickSupport).toBe(false)
    expect(result.length).not.toBe(1)
  })
})

describe('测试 generatButtonNumbers', () => {
  it.each([
    [true, ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']],
    [false, ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']]
  ])('生成号码为双位数%s', (boo, ex) => {
    let result: string[] = betOptionsGenerator.generatButtonNumbers(1, 10, boo)
    expect(result).toEqual(ex)
  })
})
