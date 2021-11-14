import BetOptionsGeneratorPK10 from '../optionsGenerators/GeneratorPK10'
import CalculatorPK10 from '../profitCalculators/CalculatorPK10'

import { encode as DaXiaoDanShuangEncode, decode as DaXiaoDanShuangDecode } from '../encoders/DaXiaoDanShuang'
import { OptionSection, ProfitParams } from 'src/Interfases'
import DanshiInput from '../DanshiInput'

const OptionsGenerator = new BetOptionsGeneratorPK10()
const Calculator = new CalculatorPK10()

const ONE_TO_TEN_ARRAY: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const TITLE_LABEL_ARRAY: string[] = ['冠军', '亚军', '第三', '第四', '第五', '第六', '第七', '第八', '第九', '第十']

function guanYaJunWrapper(this: any, num: number): number {
  var arr: [] | any = []
  this.betOptions.forEach(function (element: OptionSection) {
    arr.push(element.selected)
  })
  var numArr: [] | [string[]] = []
  OptionsGenerator.getAllPailieZuheGuanYa(arr, num, numArr, [])
  return numArr.length
}

function danshiFormatter(val: string) {
  var arr = val.split(' ')
  var newArr = arr.map(function (element) {
    return Number(element) - 1
  })
  return newArr.join(',')
}

export default {
  'zhixuanhezhi-hezhi-guanyahezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(3, 19, false), true),
    isSingleNum: true
  },
  'liangmianpan-zhixuan-guanyahezhi': {
    betOptions: OptionsGenerator.generatBetOptions(['大', '小', '单', '双'], false, ['冠亚和']),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode,
    getProfit: function (params: ProfitParams): string {
      return Calculator.getProfitGuanYaHeZhi(params, this.betOptions[0].selected)
    }
  },
  'liangmianpan-zhixuan-rate_daccording': {
    betOptions: OptionsGenerator.generatBetOptions(['大', '小', '单', '双'], false, TITLE_LABEL_ARRAY),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode,
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return Calculator.profitTypeCWrapper.call(this, data)
    }
  },
  'liangmianpan-zhixuan-dragonwithtiger': {
    betOptions: OptionsGenerator.getDragonWithTiger(TITLE_LABEL_ARRAY),
    encode: (key: string): number => Number(key.split(/龙|虎/)[1]) - 1,
    decode: function (key: string, index: string) {
      if (/[^0-9]/.test(key)) {
        return key
      }
      return index + '龙' + (Number(key) + 1) + '虎'
    },
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return Calculator.profitTypeCWrapper.call(this, data)
    }
  },
  'caichehao-dingweidan-dingweidan': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return Calculator.profitTypeCWrapper.call(this, data)
    }
  },
  'budingwei-sanxingbudingwei-qiansan': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(['前三']),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: number) => ONE_TO_TEN_ARRAY[key],
    getProfit: (data: ProfitParams) => Calculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'budingwei-sanxingbudingwei-housan': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(['后三']),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: number) => ONE_TO_TEN_ARRAY[key],
    getProfit: (data: ProfitParams) => Calculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'caipaiwei-zhixuanpk-guanyajun': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(TITLE_LABEL_ARRAY.slice(0, 2)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return guanYaJunWrapper.call(this, 1)
    }
  },
  'caipaiwei-zhixuanpk-qiansanpk': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(TITLE_LABEL_ARRAY.slice(0, 3)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return guanYaJunWrapper.call(this, 2)
    }
  },
  'caipaiwei-zhixuanpk-qiansipk': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(TITLE_LABEL_ARRAY.slice(0, 4)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return guanYaJunWrapper.call(this, 3)
    }
  },
  'caipaiwei-zhixuanpk-qianwu': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(TITLE_LABEL_ARRAY.slice(0, 5)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return guanYaJunWrapper.call(this, 4)
    }
  },
  'caipaiwei-zhixuanpk-pk10qiansandanshi': {
    encode: (val: string) => danshiFormatter(val),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: () => 3,
    rule: '输入（1-10）任意不同3个号码为1注,与开奖号码前三位相同且顺序一致,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03|03 04 05|07 08 10',
    getInput: function (input: string) {
      return DanshiInput.getInput.call(this, input, 10)
    },
    noRepeat: true,
    noBaozi: true
  },
  'caipaiwei-zhixuanpk-pk10qiansidanshi': {
    encode: (val: string) => danshiFormatter(val),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: () => 4,
    rule: '输入（1-10）任意不同4个号码为1注,与开奖号码前四位相同且顺序一致,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03 04|03 04 05 07|07 08 09 10',
    getInput: function (input: string) {
      return DanshiInput.getInput.call(this, input, 10)
    },
    noRepeat: true,
    noBaozi: true
  },
  'caipaiwei-zhixuanpk-pk10qianwudanshi': {
    encode: (val: string) => danshiFormatter(val),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: () => 5,
    rule: '输入（1-10）任意不同5个号码为1注,与开奖号码前五位相同且顺序一致,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03 04 05|03 04 05 07 08|06 07 08 09 10',
    getInput: function (input: string) {
      return DanshiInput.getInput.call(this, input, 10)
    },
    noRepeat: true,
    noBaozi: true
  }
}
