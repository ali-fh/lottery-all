import Calculator from '../../../src/profitCalculators/CalculatorK3'
import inquiry from '../../data/inquiry-K3.json'

const calculator = new Calculator()

test('基础获利率', () => {
  expect(
    calculator.getProfitHeZhi(
      {
        prize: inquiry['k3-k3-hezhi'].extra_prize,
        amountUnit: 1,
        beishu: 1,
        betAmt: 2
      },
      ['4']
    )
  ).toBe('138.25')

  expect(
    calculator.getProfitHeZhi(
      {
        prize: inquiry['k3-k3-hezhi'].extra_prize,
        amountUnit: 1,
        beishu: 1,
        betAmt: 6
      },
      ['4', '5', '18']
    )
  ).toBe('64.12 ~ 414.76')
})
