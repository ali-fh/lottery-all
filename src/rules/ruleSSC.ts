import BetOptionsGeneratorK3 from '../optionsGenerators/BetOptionsGeneratorK3'

const OptionsGeneratorK3 = new BetOptionsGeneratorK3()

export default {
  // 和值
  'k3-k3-hezhi': { betOptions: OptionsGeneratorK3.generatBetOptions(OptionsGeneratorK3.generatButtonNumbers(3, 18, true), true) },
  // 大小单双
  'k3-k3-daxiaodanshuang': { betOptions: OptionsGeneratorK3.generatBetOptions(['大', '小', '单', '双']) },
  // 三同号
  'k3-k3-santonghao': { betOptions: OptionsGeneratorK3.generatBetOptions(['666', '555', '444', '333', '222', '111']) },
  // 三不同号
  'k3-k3-sanbutonghao': { betOptions: [] },
  // 三连号
  'k3-k3-sanlianhao': { betOptions: OptionsGeneratorK3.generatBetOptions(['123', '234', '345', '456']) },
  // 二不同号
  'k3-k3-erbutonghao': { betOptions: [] },
  // 二同号
  'k3-k3-ertonghao': { betOptions: OptionsGeneratorK3.generatBetOptions(OptionsGeneratorK3.generatButtonNumbersErTongHao()) },
  // 单挑一骰
  'k3-k3-dantiaoyishai': { betOptions: OptionsGeneratorK3.generatBetOptions(['6', '5', '4', '3', '2', '1']) }
}
