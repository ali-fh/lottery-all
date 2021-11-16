import Main from '../../src/Main'
import inquery from '../data/inquiry-K3.json'

let main = new Main('k3')

test('切换玩法', () => {
  main.switchRule('k3-k3-daxiaodanshuang')
})

test('快捷选号', () => {
  main.switchRule('k3-k3-hezhi')
  main.quickSelectBall('大', 0)
  expect(main.currentRule.betOptions[0].selected).toStrictEqual(['11', '12', '13', '14', '15', '16', '17', '18'])
  main.quickSelectBall('小', 0)
  expect(main.currentRule.betOptions[0].selected).toStrictEqual(['03', '04', '05', '06', '07', '08', '09', '10'])
  main.quickSelectBall('奇', 0)
  expect(main.currentRule.betOptions[0].selected).toStrictEqual(['03', '05', '07', '09', '11', '13', '15', '17'])
  main.quickSelectBall('偶', 0)
  expect(main.currentRule.betOptions[0].selected).toStrictEqual(['04', '06', '08', '10', '12', '14', '16', '18'])
  main.quickSelectBall('清', 0)
  expect(main.currentRule.betOptions[0].selected).toStrictEqual([])
})

test('计算注数', () => {
  main.switchRule('k3-k3-hezhi')
  main.quickSelectBall('大', 0)
  expect(main.getBetCount()).toBe(8)
})

test('计算获利率', () => {
  expect(
    main.getProfit({
      prize: inquery['k3-k3-hezhi'].extra_prize,
      amountUnit: 1,
      beishu: 1,
      betAmt: 2,
      betCount: main.getBetCount()
    })
  ).toBe('13.58 ~ 418.76')
})
