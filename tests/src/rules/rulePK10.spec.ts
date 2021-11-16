import rulePK10 from '../../../src/rules/rulePK10'

const rule: any = rulePK10

describe.each([
  'zhixuanhezhi-hezhi-guanyahezhi',
  'liangmianpan-zhixuan-guanyahezhi',
  'liangmianpan-zhixuan-rate_daccording',
  'liangmianpan-zhixuan-dragonwithtiger',
  'caichehao-dingweidan-dingweidan',
  'budingwei-sanxingbudingwei-qiansan',
  'budingwei-sanxingbudingwei-housan',
  'caipaiwei-zhixuanpk-guanyajun',
  'caipaiwei-zhixuanpk-qiansanpk',
  'caipaiwei-zhixuanpk-qiansipk',
  'caipaiwei-zhixuanpk-qianwu'
])('%s', (name) => {
  const obj: any = {
    'zhixuanhezhi-hezhi-guanyahezhi': ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
    'liangmianpan-zhixuan-guanyahezhi': ['大', '小', '单', '双'],
    'liangmianpan-zhixuan-rate_daccording': ['大', '小', '单', '双'],
    'liangmianpan-zhixuan-dragonwithtiger': ['1龙2虎', '1龙3虎', '1龙4虎', '1龙5虎', '1龙6虎', '1龙7虎', '1龙8虎', '1龙9虎', '1龙10虎'],
    'caichehao-dingweidan-dingweidan': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    'budingwei-sanxingbudingwei-qiansan': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    'budingwei-sanxingbudingwei-housan': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    'caipaiwei-zhixuanpk-guanyajun': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    'caipaiwei-zhixuanpk-qiansanpk': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    'caipaiwei-zhixuanpk-qiansipk': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    'caipaiwei-zhixuanpk-qianwu': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  }
  test(`下著选项应为[${obj[name]}]`, () => {
    expect(rule[name].betOptions[0].options).toStrictEqual(obj[name])
  })
})
