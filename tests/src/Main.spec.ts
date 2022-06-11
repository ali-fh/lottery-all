import Main from '../../src/Main'
import inquery from '../data/inquiry-SSC.json'

describe('快三', () => {
  const main = new Main('k3', 'cn')

  test('切换玩法', () => {
    main.switchRule('k3-k3-daxiaodanshuang')
    expect(main.currentRule.betOptions[0].options).toStrictEqual(['大', '小', '单', '双'])
  })

  test('快捷选号', () => {
    main.switchRule('k3-k3-hezhi')

    main.quickSelectBall('全', 0)
    expect(main.currentRule.betOptions[0].selected).toStrictEqual(['03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'])
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

    main.selectedBall('04', 0)
    expect(main.getBetCount()).toBe(1)

    main.quickSelectBall('大', 0)
    expect(main.getBetCount()).toBe(8)

    main.quickSelectBall('全', 0)
    expect(main.getBetCount()).toBe(16)
  })
})

describe('SSC', () => {
  const main = new Main('ssc', 'cn')

  test('计算获利率', () => {
    main.switchRule('qiansan-qita-teshuhaoma')
    main.selectedBall('豹子', 0)

    expect(
      main.getProfit({
        prize: inquery['qiansan-qita-teshuhaoma'].is_enable_extra ? inquery['qiansan-qita-teshuhaoma'].extra_prize : inquery['qiansan-qita-teshuhaoma'].prize,
        amountUnit: 1,
        beishu: 1,
        betAmt: 2,
        betCount: main.getBetCount()
      })
    ).toBe('193.60')

    main.selectedBall('对子', 0)

    expect(
      main.getProfit({
        prize: inquery['qiansan-qita-teshuhaoma'].is_enable_extra ? inquery['qiansan-qita-teshuhaoma'].extra_prize : inquery['qiansan-qita-teshuhaoma'].prize,
        amountUnit: 1,
        beishu: 1,
        betAmt: 2,
        betCount: main.getBetCount()
      })
    ).toBe('5.24 ~ 193.60')
  })
})
