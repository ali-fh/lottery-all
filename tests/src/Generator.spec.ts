import BetOptionsGenerator from '../../src/BetOptionsGenerator'
import { OptionSection } from '../../src/Interfases'

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

describe('生成2同号组合', () => {
  const result: Array<OptionSection> = betOptionsGenerator.generatErTongHao()
  const arr1: Array<string> = ['112', '113', '114', '115', '116', '122', '223', '224', '225', '226', '133', '233', '334', '335', '336']
  const arr2: Array<string> = ['144', '244', '344', '445', '446', '155', '255', '355', '455', '556', '166', '266', '366', '466', '566']
  it(`选项符合${arr1.concat(arr2)}`, () => {
    expect(result[0].options).toStrictEqual(arr1.concat(arr2))
  })
})

describe('测试 generatNumberBetOptions', () => {})

describe('生成龙虎组合', () => {
  const result: Array<OptionSection> = betOptionsGenerator.getDragonWithTiger(['冠军', '亚军', '第三', '第四', '第五', '第六', '第七', '第八', '第九', '第十'])
  const arr = [
    ['1龙2虎', '1龙3虎', '1龙4虎', '1龙5虎', '1龙6虎', '1龙7虎', '1龙8虎', '1龙9虎', '1龙10虎'],
    ['2龙1虎', '2龙3虎', '2龙4虎', '2龙5虎', '2龙6虎', '2龙7虎', '2龙8虎', '2龙9虎', '2龙10虎'],
    ['3龙1虎', '3龙2虎', '3龙4虎', '3龙5虎', '3龙6虎', '3龙7虎', '3龙8虎', '3龙9虎', '3龙10虎'],
    ['4龙1虎', '4龙2虎', '4龙3虎', '4龙5虎', '4龙6虎', '4龙7虎', '4龙8虎', '4龙9虎', '4龙10虎'],
    ['5龙1虎', '5龙2虎', '5龙3虎', '5龙4虎', '5龙6虎', '5龙7虎', '5龙8虎', '5龙9虎', '5龙10虎'],
    ['6龙1虎', '6龙2虎', '6龙3虎', '6龙4虎', '6龙5虎', '6龙7虎', '6龙8虎', '6龙9虎', '6龙10虎'],
    ['7龙1虎', '7龙2虎', '7龙3虎', '7龙4虎', '7龙5虎', '7龙6虎', '7龙8虎', '7龙9虎', '7龙10虎'],
    ['8龙1虎', '8龙2虎', '8龙3虎', '8龙4虎', '8龙5虎', '8龙6虎', '8龙7虎', '8龙9虎', '8龙10虎'],
    ['9龙1虎', '9龙2虎', '9龙3虎', '9龙4虎', '9龙5虎', '9龙6虎', '9龙7虎', '9龙8虎', '9龙10虎'],
    ['10龙1虎', '10龙2虎', '10龙3虎', '10龙4虎', '10龙5虎', '10龙6虎', '10龙7虎', '10龙8虎', '10龙9虎']
  ]

  for (let i = 0; i < 10; i++) {
    test(`${result[i].label} 排列组合应为 - ${arr[i]}`, () => {
      expect(result[i].options).toStrictEqual(arr[i])
    })
  }
})
