import BetOptionsGenerator from '../BetOptionsGenerator'
import Calculator from '../Calculator'

import { encode as DaXiaoDanShuangEncode, decode as DaXiaoDanShuangDecode } from '../encoders/DaXiaoDanShuang'
import { OptionSection, ProfitParams } from '../Interfases'
import DanshiInput from '../DanshiInput'
import Conbinations from '../Conbination'

const betOptionsGenerator = new BetOptionsGenerator()
const calculator = new Calculator()
const Conbination = new Conbinations()
const DanShiInput = new DanshiInput()

const ONE_TO_TEN_ARRAY: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const TITLE_LABEL_ARRAY: string[] = ['冠军', '亚军', '第三', '第四', '第五', '第六', '第七', '第八', '第九', '第十']

function danshiFormatter(val: string) {
  return val
    .split(' ')
    .map((element) => Number(element) - 1)
    .join(',')
}

export default {
  'zhixuanhezhi-hezhi-guanyahezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(3, 19, false),
    isSingleNum: true
  },
  'liangmianpan-zhixuan-guanyahezhi': {
    betOptions: betOptionsGenerator.generatBetOptions(['大', '小', '单', '双'], false, ['冠亚和']),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode,
    getProfit: function (params: ProfitParams): string {
      return calculator.getProfitGuanYaHeZhi(params, this.betOptions[0].selected)
    }
  },
  'liangmianpan-zhixuan-rate_daccording': {
    betOptions: betOptionsGenerator.generatBetOptions(['大', '小', '单', '双'], false, TITLE_LABEL_ARRAY),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode,
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return calculator.profitTypeBWrapper.call(this, data)
    }
  },
  'liangmianpan-zhixuan-dragonwithtiger': {
    betOptions: betOptionsGenerator.getDragonWithTiger(TITLE_LABEL_ARRAY),
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
      return calculator.profitTypeBWrapper.call(this, data)
    }
  },
  'caichehao-dingweidan-dingweidan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return calculator.profitTypeBWrapper.call(this, data)
    }
  },
  'budingwei-sanxingbudingwei-qiansan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, ['前三']),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: number) => ONE_TO_TEN_ARRAY[key],
    getProfit: (data: ProfitParams) => calculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'budingwei-sanxingbudingwei-housan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, ['后三']),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: number) => ONE_TO_TEN_ARRAY[key],
    getProfit: (data: ProfitParams) => calculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'caipaiwei-zhixuanpk-guanyajun': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, TITLE_LABEL_ARRAY.slice(0, 2)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return Conbination.guanYaJunWrapper.call(this, 1)
    }
  },
  'caipaiwei-zhixuanpk-qiansanpk': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, TITLE_LABEL_ARRAY.slice(0, 3)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return Conbination.guanYaJunWrapper.call(this, 2)
    }
  },
  'caipaiwei-zhixuanpk-qiansipk': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, TITLE_LABEL_ARRAY.slice(0, 4)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return Conbination.guanYaJunWrapper.call(this, 3)
    }
  },
  'caipaiwei-zhixuanpk-qianwu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 10, false, TITLE_LABEL_ARRAY.slice(0, 5)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: function () {
      return Conbination.guanYaJunWrapper.call(this, 4)
    }
  },
  'caipaiwei-zhixuanpk-pk10qiansandanshi': {
    encode: (val: string) => danshiFormatter(val),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1)),
    betCount: () => 3,
    rule: '输入（1-10）任意不同3个号码为1注,与开奖号码前三位相同且顺序一致,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03|03 04 05|07 08 10',
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 10)
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
      return DanShiInput.getInput.call(this, input, 10)
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
      return DanShiInput.getInput.call(this, input, 10)
    },
    noRepeat: true,
    noBaozi: true
  }
}
