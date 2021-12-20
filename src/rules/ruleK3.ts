import BetOptionsGenerator from '../BetOptionsGenerator'
import Calculator from '../Calculator'
import { encode as DaXiaoDanShuangEncode, decode as DaXiaoDanShuangDecode } from '../encoders/DaXiaoDanShuang'
import { ProfitParams } from '../Interfases'
import Combination from '../Combination'
import { I18n } from '../i18n'

const betOptionsGenerator = new BetOptionsGenerator()
const ProfitCalculator = new Calculator()
const combination = new Combination()

export default {
  // 和值
  'k3-k3-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(3, 18, true),
    getProfit: function (params: ProfitParams): string {
      return ProfitCalculator.getProfitHeZhi(params, this.betOptions[0].selected)
    }
  },
  // 大小单双
  'k3-k3-daxiaodanshuang': {
    betOptions: betOptionsGenerator.generatBetOptions([I18n.msg['options']['Big'], I18n.msg['options']['Small'], I18n.msg['options']['Single'], I18n.msg['options']['Double']]),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode
  },
  // 三同号
  'k3-k3-santonghao': {
    betOptions: betOptionsGenerator.generatBetOptions(['666', '555', '444', '333', '222', '111'])
  },
  // 三不同号
  'k3-k3-sanbutonghao': {
    betOptions: betOptionsGenerator.generatBetOptions(combination.getAllCombinationK3(3))
  },
  // 三连号
  'k3-k3-sanlianhao': {
    betOptions: betOptionsGenerator.generatBetOptions(['123', '234', '345', '456'])
  },
  // 二不同号
  'k3-k3-erbutonghao': {
    betOptions: betOptionsGenerator.generatBetOptions(combination.getAllCombinationK3(2))
  },
  // 二同号
  'k3-k3-ertonghao': {
    betOptions: betOptionsGenerator.generatErTongHao()
  },
  // 单挑一骰
  'k3-k3-dantiaoyishai': {
    betOptions: betOptionsGenerator.generatBetOptions(['6', '5', '4', '3', '2', '1']),
    getProfit: (data: ProfitParams): string => ProfitCalculator.profitTypeA(data, { '1': 1, '2': 2, '3': 3 })
  }
}
