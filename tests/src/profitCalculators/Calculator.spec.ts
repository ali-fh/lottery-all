import Calculator from '../../../src/profitCalculators/Calculator'
import inquiry from '../../../data/inquiry-K3.json'

const calculator = new Calculator()

test('基础获利率', () => {
  expect(
    calculator.profitBasic({
      // 单注奖金金额
      prize: Number(inquiry['k3-k3-daxiaodanshuang'].prize),
      // 金额单位
      amountUnit: 1,
      // 下注倍数
      beishu: 1,
      // 下注金额
      betAmt: 2
    })
  ).toBe('1.89')
})
