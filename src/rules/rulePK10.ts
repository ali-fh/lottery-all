import BetOptionsGenerator from '../BetOptionsGenerator'
import Calculator from '../Calculator'

import { encode as DaXiaoDanShuangEncode, decode as DaXiaoDanShuangDecode } from '../encoders/DaXiaoDanShuang'
import { OptionSection, ProfitParams } from '../Interfases'
import InputFilter from '../InputFilter'
import Combination from '../Combination'
import { I18n } from '../i18n'

const betOptionsGenerator = new BetOptionsGenerator()
const calculator = new Calculator()
const combination = new Combination()
const inputFilter = new InputFilter()

const ONE_TO_TEN_ARRAY: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const TITLE_LABEL_ARRAY: string[] = I18n.msg['options']['Rank']
const DA_XIAO_DAN_XHUANG: string[] = [I18n.msg['options']['Big'], I18n.msg['options']['Small'], I18n.msg['options']['Single'], I18n.msg['options']['Double']]
const GUAN_YA_HE: string[] = I18n.msg['options']['GuanYaHe']

function danshiFormatter(val: string) {
  return val
    .split(' ')
    .map((element) => Number(element) - 1)
    .join(',')
}

export default {
  'zhixuanhezhi-hezhi-guanyahezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(3, 19, false),
    isSingleNum: true,
    getProfit: function (params: ProfitParams): string {
      return calculator.getProfitHeZhi(params, this.betOptions[0].selected)
    }
  },
  'liangmianpan-zhixuan-guanyahezhi': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG, false, GUAN_YA_HE),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode,
    getProfit: function (params: ProfitParams): string {
      return calculator.getProfitGuanYaHeZhi(params, this.betOptions[0].selected)
    }
  },
  'liangmianpan-zhixuan-rate_daccording': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG, false, TITLE_LABEL_ARRAY),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode,
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return calculator.profitTypeBWrapper(this.betOptions, data)
    }
  },
  'liangmianpan-zhixuan-dragonwithtiger': {
    betOptions: betOptionsGenerator.getDragonWithTiger(TITLE_LABEL_ARRAY),
    encode: (key: string): number => Number(key.split(/龙|虎/)[1]) - 1,
    decode: function (key: string, index: string) {
      if (/[^0-9]/.test(key)) {
        return key
      }
      return index + I18n.msg['options']['Dragon'] + (Number(key) + 1) + I18n.msg['options']['Tiger']
    },
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return calculator.profitTypeBWrapper(this.betOptions, data)
    }
  },
  'caichehao-dingweidan-dingweidan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, TITLE_LABEL_ARRAY),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return calculator.profitTypeBWrapper(this.betOptions, data)
    }
  },
  'budingwei-sanxingbudingwei-qiansan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, [I18n.msg['options']['FirstThree']]),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: number) => ONE_TO_TEN_ARRAY[key],
    getProfit: (data: ProfitParams) => calculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'budingwei-sanxingbudingwei-housan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, [I18n.msg['options']['LastThree']]),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: number) => ONE_TO_TEN_ARRAY[key],
    getProfit: (data: ProfitParams) => calculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'caipaiwei-zhixuanpk-guanyajun': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, TITLE_LABEL_ARRAY.slice(0, 2)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return combination.guanYaJunWrapper(this.betOptions, 1)
    }
  },
  'caipaiwei-zhixuanpk-qiansanpk': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, TITLE_LABEL_ARRAY.slice(0, 3)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return combination.guanYaJunWrapper(this.betOptions, 2)
    }
  },
  'caipaiwei-zhixuanpk-qiansipk': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, TITLE_LABEL_ARRAY.slice(0, 4)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return combination.guanYaJunWrapper(this.betOptions, 3)
    }
  },
  'caipaiwei-zhixuanpk-qianwu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, TITLE_LABEL_ARRAY.slice(0, 5)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return combination.guanYaJunWrapper(this.betOptions, 4)
    }
  },
  'caipaiwei-zhixuanpk-pk10qiansandanshi': {
    encode: (val: string) => danshiFormatter(val),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    getInput: (input: string) => inputFilter.stringFilter(input, 10, 3)
  },
  'caipaiwei-zhixuanpk-pk10qiansidanshi': {
    encode: (val: string) => danshiFormatter(val),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    getInput: (input: string) => inputFilter.stringFilter(input, 10, 4)
  },
  'caipaiwei-zhixuanpk-pk10qianwudanshi': {
    encode: (val: string) => danshiFormatter(val),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: () => 5,
    getInput: (input: string) => inputFilter.stringFilter(input, 10, 5)
  }
}
