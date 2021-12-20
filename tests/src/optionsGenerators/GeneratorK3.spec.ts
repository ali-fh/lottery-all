import Conbinations from '../../../src/Combination'
const Conbination = new Conbinations()

it('生成2不同号数组', () => {
  const result: Array<string> = Conbination.getAllCombinationK3(2)
  expect(result).toEqual(['12', '13', '14', '15', '16', '23', '24', '25', '26', '34', '35', '36', '45', '46', '56'])
})

it('生成3不同号数组', () => {
  const result: Array<string> = Conbination.getAllCombinationK3(3)
  expect(result).toEqual(['123', '124', '125', '126', '134', '135', '136', '145', '146', '156', '234', '235', '236', '245', '246', '256', '345', '346', '356', '456'])
})
