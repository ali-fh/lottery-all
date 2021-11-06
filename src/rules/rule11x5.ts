import BetOptionsGenerator from '../optionsGenerators/BetOptionsGenerator'

const OptionsGenerator = new BetOptionsGenerator()
const DANMA_TOUMA_ARRAY = ['胆码', '拖码']
const YI_ER_SAN_ARRAY = ['一位', '二位', '三位']

export default {
  'sanma-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, YI_ER_SAN_ARRAY)
  },
  'erma-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, YI_ER_SAN_ARRAY.slice(0, 2))
  },
  'sanma-zhixuan-danshi': {},
  'erma-zhixuan-danshi': {},
  'sanma-zuxuan-danshi': {},
  'erma-zuxuan-danshi': {},
  'sanma-zuxuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'erma-zuxuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'sanma-zuxuan-dantuo': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, DANMA_TOUMA_ARRAY)
  },
  'erma-zuxuan-dantuo': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, DANMA_TOUMA_ARRAY)
  },
  'renxuandantuo-renxuandantuo-renxuaner': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, DANMA_TOUMA_ARRAY)
  },
  'renxuandantuo-renxuandantuo-renxuansan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, DANMA_TOUMA_ARRAY)
  },
  'renxuandantuo-renxuandantuo-renxuansi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, DANMA_TOUMA_ARRAY)
  },
  'renxuandantuo-renxuandantuo-renxuanwu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, DANMA_TOUMA_ARRAY)
  },
  'renxuandantuo-renxuandantuo-renxuanliu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, DANMA_TOUMA_ARRAY)
  },
  'renxuandantuo-renxuandantuo-renxuanqi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, DANMA_TOUMA_ARRAY)
  },
  'renxuandantuo-renxuandantuo-renxuanba': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, DANMA_TOUMA_ARRAY)
  },
  'budingwei-budingwei-budingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'dingweidan-dingweidan-dingweidan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true, YI_ER_SAN_ARRAY)
  },
  'quweixing-quweixing-dingdanshuang': {
    betOptions: OptionsGenerator.generatBetOptions(['5单0双', '4单1双', '3单2双', '2单3双', '1单4双', '0单5双'], true)
  },
  'quweixing-quweixing-caizhongwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'renxuanfushi-renxuanfushi-renxuanyi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'renxuanfushi-renxuanfushi-renxuaner': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'renxuanfushi-renxuanfushi-renxuansan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'renxuanfushi-renxuanfushi-renxuansi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'renxuanfushi-renxuanfushi-renxuanwu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'renxuanfushi-renxuanfushi-renxuanliu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'renxuanfushi-renxuanfushi-renxuanqi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'renxuanfushi-renxuanfushi-renxuanba': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 11, true), true)
  },
  'renxuandanshi-renxuandanshi-renxuanyi': {},
  'renxuandanshi-renxuandanshi-renxuaner': {},
  'renxuandanshi-renxuandanshi-renxuansan': {},
  'renxuandanshi-renxuandanshi-renxuansi': {},
  'renxuandanshi-renxuandanshi-renxuanwu': {},
  'renxuandanshi-renxuandanshi-renxuanliu': {},
  'renxuandanshi-renxuandanshi-renxuanqi': {},
  'renxuandanshi-renxuandanshi-renxuanba': {}
}
