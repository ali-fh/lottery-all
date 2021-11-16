import Generator11x5 from '../../../src/optionsGenerators/Generator11x5'
import { OptionSection } from '../../../src/Interfases'

const betOptionsGenerator = new Generator11x5()

let result: Array<OptionSection> = []
test('生成十一选五默认下著资讯', () => {
  result = betOptionsGenerator.generatNumberBetOptions(1, 11, true, ['后78'])
  console.log(result[0].label)
  // expect(result[0].label).toBe('后三')
  expect(result[0].options).toStrictEqual(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'])
  expect(result[0].quickSupport).toBe(true)
})

test('生成十一选五默认下著资讯-无标题', () => {
  result = betOptionsGenerator.generatNumberBetOptions(1, 11, true)
  expect(result[0].label).toStrictEqual('')
})
