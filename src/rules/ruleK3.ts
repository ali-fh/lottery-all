import BetOptionsGeneratorK3 from '../optionsGenerators/GeneratorK3'

const OptionsGenerator = new BetOptionsGeneratorK3()

export default {
  // 和值
  'k3-k3-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(3, 18, true), true)
  },
  // 大小单双
  'k3-k3-daxiaodanshuang': {
    betOptions: OptionsGenerator.generatBetOptions(['大', '小', '单', '双'])
  },
  // 三同号
  'k3-k3-santonghao': {
    betOptions: OptionsGenerator.generatBetOptions(['666', '555', '444', '333', '222', '111'])
  },
  // 三不同号
  'k3-k3-sanbutonghao': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.getAllPailieZuHeSanBuTongHao())
  },
  // 三连号
  'k3-k3-sanlianhao': {
    betOptions: OptionsGenerator.generatBetOptions(['123', '234', '345', '456'])
  },
  // 二不同号
  'k3-k3-erbutonghao': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.getAllPailieZuHeErBuTongHao())
  },
  // 二同号
  'k3-k3-ertonghao': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbersErTongHao())
  },
  // 单挑一骰
  'k3-k3-dantiaoyishai': {
    betOptions: OptionsGenerator.generatBetOptions(['6', '5', '4', '3', '2', '1'])
  }
}
