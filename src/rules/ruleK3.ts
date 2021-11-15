import BetOptionsGeneratorK3 from '../optionsGenerators/GeneratorK3'
import CalculatorK3 from '../profitCalculators/CalculatorK3'
import { encode as DaXiaoDanShuangEncode, decode as DaXiaoDanShuangDecode } from '../encoders/DaXiaoDanShuang'
import { ProfitParams } from '../Interfases'
import Conbinations from '../Conbination'

const OptionsGenerator = new BetOptionsGeneratorK3()
const ProfitCalculator = new CalculatorK3()
const Conbination = new Conbinations()

export default {
  // 和值
  'k3-k3-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(3, 18, true), true),
    getProfit: function (params: ProfitParams): string {
      return ProfitCalculator.getProfitHeZhi(params, this.betOptions[0].selected)
    }
  },
  // 大小单双
  'k3-k3-daxiaodanshuang': {
    betOptions: OptionsGenerator.generatBetOptions(['大', '小', '单', '双']),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode
  },
  // 三同号
  'k3-k3-santonghao': {
    betOptions: OptionsGenerator.generatBetOptions(['666', '555', '444', '333', '222', '111'])
  },
  // 三不同号
  'k3-k3-sanbutonghao': {
    betOptions: OptionsGenerator.generatBetOptions(Conbination.getAllPailieZuHeBuTongHaoWrapper(3))
  },
  // 三连号
  'k3-k3-sanlianhao': {
    betOptions: OptionsGenerator.generatBetOptions(['123', '234', '345', '456'])
  },
  // 二不同号
  'k3-k3-erbutonghao': {
    betOptions: OptionsGenerator.generatBetOptions(Conbination.getAllPailieZuHeBuTongHaoWrapper(2))
  },
  // 二同号
  'k3-k3-ertonghao': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbersErTongHao())
  },
  // 单挑一骰
  'k3-k3-dantiaoyishai': {
    betOptions: OptionsGenerator.generatBetOptions(['6', '5', '4', '3', '2', '1']),
    getProfit: (data: ProfitParams): string => ProfitCalculator.profitTypeA(data, { '1': 1, '2': 2, '3': 3 })
  }
}
