import InputFilter from '../InputFilter'
import { OptionSection, ProfitParams } from '../Interfases'
import BetOptionsGenerator from '../BetOptionsGenerator'
import Calculator from '../Calculator'
import { encode as DingDanShuangEncode, decode as DingDanShuangDecode } from '../encoders/DingDanShuang'
import Combination from '../Combination'
import { I18n } from '../i18n'

const betOptionsGenerator = new BetOptionsGenerator()
const ProfitCalculator = new Calculator()
const combination = new Combination()
const inputFilter = new InputFilter()

const DANMA_TOUMA_ARRAY = I18n.getText('options.DanMaTouMa')
const YI_ER_SAN_ARRAY = I18n.getText('options.YiErSanPositon')

function dantuoSelectLimit(this: any, num: string, index: number, danmaLen: number) {
  var danmaArr: Array<string> = this.betOptions[0].selected
  var tuomaArr: Array<string> = this.betOptions[1].selected
  if (index === 0) {
    if (danmaArr.length >= danmaLen) {
      danmaArr.splice(danmaLen - 1, 1, num)
    } else {
      danmaArr.push(num)
    }
    var numIndex = tuomaArr.indexOf(num)
    if (numIndex !== -1) {
      tuomaArr.splice(numIndex, 1)
    }
  } else {
    tuomaArr.push(num)
    var numIndex = danmaArr.indexOf(num)
    if (numIndex !== -1) {
      danmaArr.splice(numIndex, 1)
    }
  }
}

export default {
  'sanma-zhixuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, YI_ER_SAN_ARRAY),
    betCount: function (num: number) {
      return combination.zhixuanBetCountWrapper(this.betOptions, num, 2)
    }
  },
  'erma-zhixuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, YI_ER_SAN_ARRAY.slice(0, 2)),
    betCount: function (num: number) {
      return combination.zhixuanBetCountWrapper(this.betOptions, num, 1)
    }
  },
  'sanma-zhixuan-danshi': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 3)
  },
  'erma-zhixuan-danshi': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 2)
  },
  'sanma-zuxuan-danshi': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 3)
  },
  'erma-zuxuan-danshi': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 2)
  },
  'sanma-zuxuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return combination.getAllPailieZuheListWrapper(this.betOptions[0].selected, 3)
    }
  },
  'erma-zuxuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return combination.getAllPailieZuheListWrapper(this.betOptions[0].selected, 2)
    }
  },
  'sanma-zuxuan-dantuo': {
    betOptions: betOptionsGenerator.generatDanTuoBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return combination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 3)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 2)
    }
  },
  'erma-zuxuan-dantuo': {
    betOptions: betOptionsGenerator.generatDanTuoBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return combination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 2)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 1)
    }
  },
  'renxuandantuo-renxuandantuo-renxuaner': {
    betOptions: betOptionsGenerator.generatDanTuoBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return combination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 2)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 1)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { '1': 1, '2': 2, '3': 3, '4': 4 })
  },
  'renxuandantuo-renxuandantuo-renxuansan': {
    betOptions: betOptionsGenerator.generatDanTuoBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return combination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 3)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 2)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 })
  },
  'renxuandantuo-renxuandantuo-renxuansi': {
    betOptions: betOptionsGenerator.generatDanTuoBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return combination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 4)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 3)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { '1': 1, '2': 2, '3': 3, '4': 4 })
  },
  'renxuandantuo-renxuandantuo-renxuanwu': {
    betOptions: betOptionsGenerator.generatDanTuoBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return combination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 5)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 4)
    }
  },
  'renxuandantuo-renxuandantuo-renxuanliu': {
    betOptions: betOptionsGenerator.generatDanTuoBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return combination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 6)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 5)
    },
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitType11x5.call(this, data, [
        { 1: 1, 6: 2, 21: 3, 56: 4, 126: 5, 252: 6 },
        { 1: 1, 5: 1, 15: 2, 35: 3, 70: 4, 126: 5 },
        { 1: 1, 4: 1, 10: 1, 20: 2, 35: 3, 56: 4 },
        { 1: 1, 3: 1, 6: 1, 10: 1, 15: 2, 21: 3 },
        { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 2 }
      ])
    }
  },
  'renxuandantuo-renxuandantuo-renxuanqi': {
    betOptions: betOptionsGenerator.generatDanTuoBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return combination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 7)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 6)
    },
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitType11x5.call(this, data, [
        { 1: 1, 7: 3, 28: 6, 84: 10, 210: 15 },
        { 1: 1, 6: 1, 21: 3, 56: 6, 126: 10 },
        { 1: 1, 5: 1, 10: 1, 15: 1, 35: 3, 70: 6 },
        { 1: 1, 4: 1, 10: 1, 20: 1, 35: 3 },
        { 1: 3, 3: 1, 6: 1, 10: 1, 15: 1 },
        { 1: 6, 2: 3, 3: 1, 4: 1, 5: 1 }
      ])
    }
  },
  'renxuandantuo-renxuandantuo-renxuanba': {
    betOptions: betOptionsGenerator.generatDanTuoBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return combination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 8)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 7)
    },
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitType11x5.call(this, data, [
        { 1: 1, 8: 4, 36: 10, 120: 20 },
        { 1: 1, 7: 1, 28: 4, 84: 10 },
        { 1: 1, 6: 1, 21: 1, 56: 4 },
        { 1: 1, 5: 1, 15: 1, 35: 1 },
        { 1: 1, 4: 1, 10: 1, 20: 1 },
        { 1: 1, 3: 1, 6: 1, 10: 1 },
        { 1: 1, 2: 1, 3: 1, 4: 1 }
      ])
    }
  },
  'budingwei-budingwei-budingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'dingweidan-dingweidan-dingweidan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, YI_ER_SAN_ARRAY),
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      let position = 0
      this.betOptions.forEach((element: OptionSection) => {
        if (element.selected.length) position++
      })
      return ProfitCalculator.profitTypeB(data, [{ 1: 1 }, { 1: 2 }, { 1: 3 }], 1, position)
    }
  },
  'quweixing-quweixing-dingdanshuang': {
    betOptions: betOptionsGenerator.generatBetOptions(I18n.getText('options.DingDanShuang')),
    encode: DingDanShuangEncode,
    decode: DingDanShuangDecode
  },
  'quweixing-quweixing-caizhongwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(3, 9, false)
  },
  'renxuanfushi-renxuanfushi-renxuanyi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 })
  },
  'renxuanfushi-renxuanfushi-renxuaner': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return combination.getAllPailieZuheListWrapper(this.betOptions[0].selected, 2)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 3: 3, 6: 6, 10: 10 })
  },
  'renxuanfushi-renxuanfushi-renxuansan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return combination.getAllPailieZuheListWrapper(this.betOptions[0].selected, 3)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 4: 4, 10: 10 })
  },
  'renxuanfushi-renxuanfushi-renxuansi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return combination.getAllPailieZuheListWrapper(this.betOptions[0].selected, 4)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 5: 5 })
  },
  'renxuanfushi-renxuanfushi-renxuanwu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return combination.getAllPailieZuheListWrapper(this.betOptions[0].selected, 5)
    }
  },
  'renxuanfushi-renxuanfushi-renxuanliu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return combination.getAllPailieZuheListWrapper(this.betOptions[0].selected, 6)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 7: 2, 28: 3, 84: 4, 210: 5, 462: 6 })
  },
  'renxuanfushi-renxuanfushi-renxuanqi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return combination.getAllPailieZuheListWrapper(this.betOptions[0].selected, 7)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 8: 3, 36: 6, 120: 10, 330: 15 })
  },
  'renxuanfushi-renxuanfushi-renxuanba': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return combination.getAllPailieZuheListWrapper(this.betOptions[0].selected, 8)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 9: 4, 45: 10, 165: 20 })
  },
  'renxuandanshi-renxuandanshi-renxuanyi': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 1),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 })
  },
  'renxuandanshi-renxuandanshi-renxuaner': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 2),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 3: 3, 6: 6, 10: 10 })
  },
  'renxuandanshi-renxuandanshi-renxuansan': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 3),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 4: 4, 10: 10 })
  },
  'renxuandanshi-renxuandanshi-renxuansi': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 4),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 5: 5 })
  },
  'renxuandanshi-renxuandanshi-renxuanwu': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 5)
  },
  'renxuandanshi-renxuandanshi-renxuanliu': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 6)
  },
  'renxuandanshi-renxuandanshi-renxuanqi': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 7)
  },
  'renxuandanshi-renxuandanshi-renxuanba': {
    getInput: (input: string) => inputFilter.stringFilter(input, 11, 8)
  }
}
