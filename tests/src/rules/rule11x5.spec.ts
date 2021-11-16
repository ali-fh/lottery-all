import rule11x5 from '../../../src/rules/rule11x5'

const rule: any = rule11x5

describe.each([
  'sanma-zhixuan-fushi',
  'erma-zhixuan-fushi',
  'sanma-zuxuan-fushi',
  'erma-zuxuan-fushi',
  'sanma-zuxuan-dantuo',
  'erma-zuxuan-dantuo',
  'renxuandantuo-renxuandantuo-renxuaner',
  'renxuandantuo-renxuandantuo-renxuansan',
  'renxuandantuo-renxuandantuo-renxuansi',
  'renxuandantuo-renxuandantuo-renxuanwu',
  'renxuandantuo-renxuandantuo-renxuanliu',
  'renxuandantuo-renxuandantuo-renxuanqi',
  'renxuandantuo-renxuandantuo-renxuanba',
  'budingwei-budingwei-budingwei',
  'dingweidan-dingweidan-dingweidan',
  'quweixing-quweixing-dingdanshuang',
  'quweixing-quweixing-caizhongwei',
  'renxuanfushi-renxuanfushi-renxuanyi',
  'renxuanfushi-renxuanfushi-renxuaner',
  'renxuanfushi-renxuanfushi-renxuansan',
  'renxuanfushi-renxuanfushi-renxuansi',
  'renxuanfushi-renxuanfushi-renxuanwu',
  'renxuanfushi-renxuanfushi-renxuanliu',
  'renxuanfushi-renxuanfushi-renxuanqi',
  'renxuanfushi-renxuanfushi-renxuanba'
])('%s', (name) => {
  const obj: any = {
    'sanma-zhixuan-fushi': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'erma-zhixuan-fushi': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'sanma-zuxuan-fushi': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'erma-zuxuan-fushi': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'sanma-zuxuan-dantuo': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'erma-zuxuan-dantuo': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuandantuo-renxuandantuo-renxuaner': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuandantuo-renxuandantuo-renxuansan': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuandantuo-renxuandantuo-renxuansi': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuandantuo-renxuandantuo-renxuanwu': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuandantuo-renxuandantuo-renxuanliu': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuandantuo-renxuandantuo-renxuanqi': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuandantuo-renxuandantuo-renxuanba': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'budingwei-budingwei-budingwei': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'dingweidan-dingweidan-dingweidan': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'quweixing-quweixing-dingdanshuang': ['5单0双', '4单1双', '3单2双', '2单3双', '1单4双', '0单5双'],
    'quweixing-quweixing-caizhongwei': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuanfushi-renxuanfushi-renxuanyi': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuanfushi-renxuanfushi-renxuaner': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuanfushi-renxuanfushi-renxuansan': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuanfushi-renxuanfushi-renxuansi': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuanfushi-renxuanfushi-renxuanwu': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuanfushi-renxuanfushi-renxuanliu': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuanfushi-renxuanfushi-renxuanqi': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    'renxuanfushi-renxuanfushi-renxuanba': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']
  }
  test(`下著选项应为[${obj[name]}]`, () => {
    expect(rule[name].betOptions[0].options).toStrictEqual(obj[name])
  })
})
