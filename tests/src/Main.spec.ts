import Main from '../../src/Main'
import inquery from '../data/inquiry-K3.json'

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

  test('计算获利率', () => {
    main.quickSelectBall('大', 0)
    expect(
      main.getProfit({
        prize: inquery['k3-k3-hezhi'].is_enable_extra ? inquery['k3-k3-hezhi'].extra_prize : inquery['k3-k3-hezhi'].prize,
        amountUnit: 1,
        beishu: 1,
        betAmt: 2,
        betCount: main.getBetCount()
      })
    ).toBe('13.58 ~ 418.76')
  })
})

describe('pk10', () => {
  const main = new Main('pk10', 'cn')

  test('切换玩法', () => {
    main.switchRule('caipaiwei-zhixuanpk-pk10qiansandanshi')
    expect(main.currentRule.rule).toBe('输入（1-10）任意不同3个号码为1注,与开奖号码前三位相同且顺序一致,即为中奖')
    expect(main.currentRule.placeholder).toBe('输入注单请使用空格隔开，分割符号为回车\n格式范例: \n01 02 03\n03 04 05\n07 08 10')
  })
})

describe('SSC', () => {
  const main = new Main('ssc', 'cn')

  test('切换玩法和值', () => {
    main.switchRule('renxuan-renxuan4-zuxuan4')
    main.togglePosition(0)
    main.togglePosition(2)
    main.quickSelectBall('全', 0)
    main.quickSelectBall('全', 1)
    expect(main.getBetCount()).toBe(90)
  })
})

describe('SSC', () => {
  const main = new Main('plw', 'cn')

  test('format test', () => {
    main.switchRule('qiansan-zhixuan-danshi')
    expect(main.format('045')).toBe(90)
  })
})
