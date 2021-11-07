import BetOptionsGeneratorK3 from '../../../src/optionsGenerators/GeneratorK3'

const betOptionsGenerator = new BetOptionsGeneratorK3()

it('生成2同号数组', () => {
  const result: Array<string> = betOptionsGenerator.generatButtonNumbersErTongHao()
  const arr1: Array<string> = ['112', '113', '114', '115', '116', '122', '223', '224', '225', '226', '133', '233', '334', '335', '336']
  const arr2: Array<string> = ['144', '244', '344', '445', '446', '155', '255', '355', '455', '556', '166', '266', '366', '466', '566']
  expect(result).toEqual(arr1.concat(arr2))
})

it('生成2不同号数组', () => {
  const result: Array<string> = betOptionsGenerator.getAllPailieZuHeBuTongHaoWrapper(2)
  expect(result).toEqual(['12', '13', '14', '15', '16', '23', '24', '25', '26', '34', '35', '36', '45', '46', '56'])
})

it('生成3不同号数组', () => {
  const result: Array<string> = betOptionsGenerator.getAllPailieZuHeBuTongHaoWrapper(3)
  expect(result).toEqual(['123', '124', '125', '126', '134', '135', '136', '145', '146', '156', '234', '235', '236', '245', '246', '256', '345', '346', '356', '456'])
})
