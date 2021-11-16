import DanshiInput from '../DanshiInput'
import { OptionSection, ProfitParams } from '../Interfases'
import BetOptionsGenerator from '../BetOptionsGenerator'
import Calculator from '../profitCalculators/Calculator11x5'
import { encode as DingDanShuangEncode, decode as DingDanShuangDecode } from '../encoders/DingDanShuang'
import Conbinations from '../Conbination'

const betOptionsGenerator = new BetOptionsGenerator()
const ProfitCalculator = new Calculator()
const Conbination = new Conbinations()
const DanShiInput = new DanshiInput()

const DANMA_TOUMA_ARRAY = ['胆码', '拖码']
const YI_ER_SAN_ARRAY = ['一位', '二位', '三位']

function dantuoSelectLimit(this: any, num: string, index: number, danmaLen: number) {
  var danmaArr: Array<string> = this.list[0].selected
  var tuomaArr: Array<string> = this.list[1].selected
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
      return Conbination.zhixuanBetCountWrapper.call(this, num, 2)
    }
  },
  'erma-zhixuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, YI_ER_SAN_ARRAY.slice(0, 2)),
    betCount: function (num: number) {
      return Conbination.zhixuanBetCountWrapper.call(this, num, 1)
    }
  },
  'sanma-zhixuan-danshi': {
    betCount: () => 3,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)任意3个号码1注,与开奖号码完全相同(且顺序一致),即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03|03 04 05|07 08 11',
    noRepeat: true,
    noBaozi: true
  },
  'erma-zhixuan-danshi': {
    betCount: () => 2,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)任意2个号码1注,与开奖号码完全相同(且顺序一致),即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02|03 05|07 08',
    noRepeat: true,
    noBaozi: true
  },
  'sanma-zuxuan-danshi': {
    betCount: () => 3,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)任意3个不同号码1注,与开奖号码完全相同(顺序不限),即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03|03 04 05|07 08 11',
    noRepeat: true,
    noBaozi: true
  },
  'erma-zuxuan-danshi': {
    betCount: () => 2,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)任意2个不同号码1注,与开奖号码完全相同(顺序不限),即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02|04 05|07 08',
    noRepeat: true,
    noBaozi: true
  },
  'sanma-zuxuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return Conbination.getAllPailieZuheListWrapper.call(this, 3)
    }
  },
  'erma-zuxuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return Conbination.getAllPailieZuheListWrapper.call(this, 2)
    }
  },
  'sanma-zuxuan-dantuo': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return Conbination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 3)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 2)
    }
  },
  'erma-zuxuan-dantuo': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return Conbination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 2)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 1)
    }
  },
  'renxuandantuo-renxuandantuo-renxuaner': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return Conbination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 2)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 1)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { '1': 1, '2': 2, '3': 3, '4': 4 })
  },
  'renxuandantuo-renxuandantuo-renxuansan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return Conbination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 3)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 2)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 })
  },
  'renxuandantuo-renxuandantuo-renxuansi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return Conbination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 4)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 3)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { '1': 1, '2': 2, '3': 3, '4': 4 })
  },
  'renxuandantuo-renxuandantuo-renxuanwu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return Conbination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 5)
    },
    selectdeLimitFormatter: function (num: any, index: any) {
      dantuoSelectLimit.call(this, num, index, 4)
    }
  },
  'renxuandantuo-renxuandantuo-renxuanliu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return Conbination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 6)
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
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return Conbination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 7)
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
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true, DANMA_TOUMA_ARRAY),
    betCount: function () {
      return Conbination.getAllPailieZuheList_danmatuoma(this.betOptions[0].selected, this.betOptions[1].selected, 8)
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
    betOptions: betOptionsGenerator.generatBetOptions(['5单0双', '4单1双', '3单2双', '2单3双', '1单4双', '0单5双']),
    encode: DingDanShuangEncode,
    decode: DingDanShuangDecode
  },
  'quweixing-quweixing-caizhongwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true)
  },
  'renxuanfushi-renxuanfushi-renxuanyi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 })
  },
  'renxuanfushi-renxuanfushi-renxuaner': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return Conbination.getAllPailieZuheListWrapper.call(this, 2)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 3: 3, 6: 6, 10: 10 })
  },
  'renxuanfushi-renxuanfushi-renxuansan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return Conbination.getAllPailieZuheListWrapper.call(this, 3)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 4: 4, 10: 10 })
  },
  'renxuanfushi-renxuanfushi-renxuansi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return Conbination.getAllPailieZuheListWrapper.call(this, 4)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 5: 5 })
  },
  'renxuanfushi-renxuanfushi-renxuanwu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return Conbination.getAllPailieZuheListWrapper.call(this, 5)
    }
  },
  'renxuanfushi-renxuanfushi-renxuanliu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return Conbination.getAllPailieZuheListWrapper.call(this, 6)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 7: 2, 28: 3, 84: 4, 210: 5, 462: 6 })
  },
  'renxuanfushi-renxuanfushi-renxuanqi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return Conbination.getAllPailieZuheListWrapper.call(this, 7)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 8: 3, 36: 6, 120: 10, 330: 15 })
  },
  'renxuanfushi-renxuanfushi-renxuanba': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 11, true),
    betCount: function () {
      return Conbination.getAllPailieZuheListWrapper.call(this, 8)
    },
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 9: 4, 45: 10, 165: 20 })
  },
  'renxuandanshi-renxuandanshi-renxuanyi': {
    betCount: () => 1,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)中任意1个号码为1注,开奖号码包含所选号码,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01|04|08',
    noRepeat: true,
    noBaozi: true,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 })
  },
  'renxuandanshi-renxuandanshi-renxuaner': {
    betCount: () => 2,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)中任意2个不同号码为1注,开奖号码包含所选2个号码,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02|04 05|08 09',
    noRepeat: true,
    noBaozi: true,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 3: 3, 6: 6, 10: 10 })
  },
  'renxuandanshi-renxuandanshi-renxuansan': {
    betCount: () => 3,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)中任意3个不同号码为1注,开奖号码包含所选3个号码,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03|04 05 06|08 09 10',
    noRepeat: true,
    noBaozi: true,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 4: 4, 10: 10 })
  },
  'renxuandanshi-renxuandanshi-renxuansi': {
    betCount: () => 4,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)中任意4个不同号码为1注,开奖号码包含所选4个号码,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03 04|04 05 06 07|08 09 10 11',
    noRepeat: true,
    noBaozi: true,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 5: 5 })
  },
  'renxuandanshi-renxuandanshi-renxuanwu': {
    betCount: () => 5,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)中任意5个不同号码为1注,开奖号码包含所选5个号码,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03 04 05|04 05 06 07 08|07 08 09 10 11',
    noRepeat: true,
    noBaozi: true
  },
  'renxuandanshi-renxuandanshi-renxuanliu': {
    betCount: () => 6,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)中任意6个不同号码为1注,开奖号码包含所选号码中任意5个号码,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03 04 05 06|04 05 06 07 08 09|06 07 08 09 10 11',
    noRepeat: true,
    noBaozi: true
  },
  'renxuandanshi-renxuandanshi-renxuanqi': {
    betCount: () => 7,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)中任意7个不同号码为1注,开奖号码包含所选号码中任意5个号码,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03 04 05 06 07|04 05 06 07 08 09 10|05 06 07 08 09 10 11',
    noRepeat: true,
    noBaozi: true
  },
  'renxuandanshi-renxuandanshi-renxuanba': {
    betCount: () => 8,
    getInput: function (input: string) {
      return DanShiInput.getInput.call(this, input, 11)
    },
    rule: '输入(01-11)中任意8个不同号码为1注,开奖号码包含所选号码中任意5个号码,即为中奖',
    placeholder: '输入注单请用空格或竖线隔开 格式范例: 01 02 03 04 05 06 07 08|03 04 05 06 07 08 09 10|04 05 06 07 08 09 10 11',
    noRepeat: true,
    noBaozi: true
  }
}
