import GeneratorPK10 from '../../../src/optionsGenerators/GeneratorPK10'
import { OptionSection } from '../../../src/Interfases'

const betOptionsGenerator = new GeneratorPK10()
const TITLE_LABEL_ARRAY: string[] = ['冠军', '亚军', '第三', '第四', '第五', '第六', '第七', '第八', '第九', '第十']

describe('生成龙虎组合', () => {
  const result: Array<OptionSection> = betOptionsGenerator.getDragonWithTiger(TITLE_LABEL_ARRAY)
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

  test('应有10组组合', () => {
    expect(result.length).toBe(10)
  })

  for (let i = 0; i < 10; i++) {
    test(`${result[i].label} 排列组合应为 - ${arr[i]}`, () => {
      expect(result[i].options).toStrictEqual(arr[i])
    })
  }
})

let result: Array<OptionSection> = []
test('生成PK10默认下著资讯', () => {
  result = betOptionsGenerator.generatBetOptionsPK10(['后三'])
  expect(result[0].label).toBe('后三')
  expect(result[0].options).toStrictEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
  expect(result[0].quickSupport).toBe(true)
})

test('生成PK10默认下著资讯-无标题', () => {
  result = betOptionsGenerator.generatBetOptionsPK10()
  expect(result[0].label).toStrictEqual('')
})
