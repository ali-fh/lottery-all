import { OptionSection, ProfitParams } from '../Interfases'
import BetOptionsGenerator from '../BetOptionsGenerator'
import Calculator from '../Calculator'
import Util from '../Util'
import { encode as BaoZiShunZiDuiZiEncode } from '../encoders/BaoZiShunZiDuiZi'
import { encode as DaXiaoDanShuangEncode } from '../encoders/DaXiaoDanShuang'
import { encode as LongHuEncode } from '../encoders/LongHuHe'
import Combination from '../Combination'
import { I18n } from '../i18n'

const betOptionsGenerator = new BetOptionsGenerator()
const ProfitCalculator = new Calculator()
const combination = new Combination()

const DIGIT_ARRAY = I18n.msg['options']['Digits']
const DA_XIAO_DAN_XHUANG_ARRAY = [I18n.msg['options']['Big'], I18n.msg['options']['Small'], I18n.msg['options']['Single'], I18n.msg['options']['Double']]
const LONG_HU_HE_ARRAY = [I18n.msg['options']['Dragon'], I18n.msg['options']['Tiger'], I18n.msg['options']['Tie']]
const QUJIAN_ARRAY = I18n.msg['options']['QuJian']
const DA_XIAO_ARRAY = I18n.msg['options']['DaXiao']

enum QuJian {
  '一区(0-1)',
  '二区(2-3)',
  '三区(4-5)',
  '四区(6-7)',
  '五区(8-9)'
}

enum DaXiao {
  '小(0-4)',
  '大(5-9)'
}

function getPailieByRenxuan(this: any, num: number) {
  var sum: Array<number> = []
  this.betOptions.forEach((element: any) => {
    if (element.selected.length) {
      sum.push(element.selected.length)
    }
  })
  return combination.getPailieByRenxuanArr(sum, num)
}

function positionBet(num: number, position: Array<boolean>, limit: number) {
  const total = position.filter((element) => element).length
  return num * getPailieByNoLabel(total, limit)
}

/** 获取几个号码的排列 */
function getPailieByNoLabel(num: number, len: number) {
  if (num < len) return 0
  var numArr: Array<string> = []
  combination.getAllPailieZuHeBuTongHao(Array(num).fill(1), len, numArr, '', false)
  return numArr.length
}

/** 获取和值排列并求和 */
function getPailieSumOfHezhi(data: any, limit: number, sum: number) {
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var numArr: Array<number> = []
  var total = 0
  combination.getAllPailieZuHeBuTongHao(arr, limit, numArr, sum, true)
  for (var i = 0, len = data.length; i < len; i++) {
    numArr.forEach(function (ele: number) {
      if (ele === Number(data[i])) {
        total++
      }
    })
  }
  return total
}

/** 获取和值排列并求和不含豹子号 */
function getPailieSumOfHezhiNoBaozi(data: Array<string>, limit: number) {
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var sumArr: Array<string> = []
  var numArr: Array<string> = []
  var total = 0
  getAllPailieZuheListNoBaozi(arr, limit, sumArr, numArr, 0, '', true)
  for (var i = 0, len = data.length; i < len; i++) {
    sumArr.forEach(function (ele) {
      if (String(ele) === data[i]) {
        total++
      }
    })
  }
  return total
}

/** 获取排列组合不包含豹子 */
function getAllPailieZuheListNoBaozi(data: Array<any>, len: number, sumArr: Array<string>, numArr: Array<any>, sum: number, str: string, isRepeat = false) {
  for (var i = 0; i < data.length; i++) {
    var newStr = str + data[i]
    var newSum = sum + data[i]
    if (len === 1) {
      // 排除豹子
      if (Util.getDuplicate(newStr, data[i]) !== newStr.length) {
        var newArr = newStr.split('')
        var isExist = numArr.some(function (ele) {
          var flag = ele.every(function (num: any) {
            return newArr.includes(num)
          })
          if (flag) {
            var array1 = ele.sort()
            var array2 = newArr.sort()
            for (var j = 0; j < array2.length; j++) {
              if (array2[j] !== array1[j]) {
                return false
              }
            }
            return true
          }
        })
        if (!isExist) {
          numArr.push(newArr)
          sumArr.push(newSum)
        }
      }
    } else {
      var newData = data.concat()
      if (!isRepeat) newData.splice(0, i + 1)
      getAllPailieZuheListNoBaozi(newData, len - 1, sumArr, numArr, newSum, newStr, isRepeat)
    }
  }
}

/** 二重号和单号排列组合 */
function getPailieOfErchonghaoDanhao(minArr: Array<string>, maxArr: Array<string>, limit: number) {
  if (maxArr.length < limit || minArr.length === 0) return 0
  var numArr: Array<string> = []
  combination.getAllPailieZuHeBuTongHao(maxArr, limit, numArr, '', false)
  var total = 0
  for (var i = 0, len = minArr.length; i < len; i++) {
    var sum = 0
    numArr.forEach(function (ele) {
      if (!ele.includes(minArr[i])) {
        sum++
      }
    })
    total = total + sum
  }
  return total
}

/** 二重号排列组合 */
function getPailieOfErchonghaoSingle(data: Array<string>, limit: number) {
  if (data.length < limit) return 0
  var numArr: Array<string> = []
  combination.getAllPailieZuHeBuTongHao(data, limit, numArr, '', false)
  return numArr.length
}

/** 获取跨度排列并求最大和最小之差 */
function getPailieDOfKuadu(data: Array<string>, limit: number) {
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var numArr: Array<string> = []
  var total = 0
  getAllPailieZuheChaList(arr, limit, numArr, null, null, true)

  for (var i = 0, len = data.length; i < len; i++) {
    numArr.forEach(function (ele: string) {
      if (String(ele) === data[i]) {
        total++
      }
    })
  }
  return total
}

/** 获取几个数字的所有排列组合最大和最小差值 */
function getAllPailieZuheChaList(data: Array<any>, len: number, numArr: Array<any>, min: number | null, max: number | null, isRepeat = false) {
  for (var i = 0; i < data.length; i++) {
    var newMin = min
    var newMax = max
    if (!newMin && newMin !== 0) {
      newMin = data[i]
    }
    if (!newMax && newMax !== 0) {
      newMax = data[i]
    }
    if (len === 1) {
      numArr.push(Math.max(Number(newMax), data[i]) - Math.min(Number(newMin), data[i]))
    } else {
      var newData = data.concat()
      if (!isRepeat) newData.splice(0, i + 1)
      getAllPailieZuheChaList(newData, len - 1, numArr, Math.min(Number(newMin), data[i]), Math.max(Number(newMax), data[i]), isRepeat)
    }
  }
}

function generatLongHuHeRule(label: string) {
  return {
    betOptions: betOptionsGenerator.generatBetOptions(LONG_HU_HE_ARRAY, false, [label]),
    encode: LongHuEncode,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeE(data, Util.toFixed(((data.prize * data.amountUnit) / 6) * data.beishu - data.betAmt, 2))
  }
}

export default {
  'yixing-dingweidan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY),
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper([], this.betOptions, data, [{ 1: 1 }, { 1: 2 }, { 1: 3 }, { 1: 4 }, { 1: 5 }], 1)
    }
  },
  'wuxing-zhixuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY)
  },
  'sixing-zhixuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(1))
  },
  'qiansan-zhixuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(0, 3))
  },
  'zhongsan-zhixuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(1, 4))
  },
  'housan-zhixuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2))
  },
  'erxing-zhixuan-houerfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(3))
  },
  'erxing-zhixuan-qianerfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(0, 2))
  },
  'renxuan-renxuan2-zhixuanfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY),
    betCount: function () {
      return getPailieByRenxuan.call(this, 2)
    },
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper([], this.betOptions, data, [{}, {}, { 1: 3 }, { 1: 6 }, { 1: 10 }], 2)
    }
  },
  'renxuan-renxuan3-zhixuanfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY),
    betCount: function () {
      return getPailieByRenxuan.call(this, 3)
    },
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper([], this.betOptions, data, [{}, {}, {}, { 1: 4 }, { 1: 10 }], 3)
    }
  },
  'renxuan-renxuan4-zhixuanfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY),
    betCount: function () {
      return getPailieByRenxuan.call(this, 4)
    },
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper([], this.betOptions, data, [{}, {}, {}, {}, { 1: 5 }], 4)
    }
  },
  'renxuan-renxuan2-zhixuandanshi': {
    betCount: () => 2,
    position: [false, false, false, true, true],
    positionLimit: 2,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 2),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, [], data, [{}, {}, { 1: 3 }, { 1: 6 }, { 1: 10 }], 2)
    },
    encode: (key: string) => Number(key)
  },
  'renxuan-renxuan3-zhixuandanshi': {
    betCount: () => 3,
    position: [false, false, true, true, true],
    positionLimit: 3,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 3),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, [], data, [{}, {}, {}, { 1: 4 }, { 1: 10 }], 3)
    },
    encode: (key: string) => Number(key)
  },
  'renxuan-renxuan4-zhixuandanshi': {
    betCount: () => 4,
    position: [false, true, true, true, true],
    positionLimit: 4,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 4),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, [], data, [{}, {}, {}, {}, { 1: 5 }], 4)
    },
    encode: (key: string) => Number(key)
  },
  'renxuan-renxuan2-zuxuandanshi': {
    betCount: () => 2,
    noRepeat: true,
    noOrder: true,
    position: [false, false, false, true, true],
    positionLimit: 2,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 2),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, [], data, [{}, {}, { 1: 3 }, { 1: 6 }, { 1: 10 }], 2)
    },
    encode: (key: string) => Number(key)
  },
  'renxuan-renxuan3-zusandanshi': {
    betCount: () => 3,
    isNeedRepeat: true,
    mustRepeatNum: 2,
    noBaozi: true,
    noOrder: true,
    position: [false, false, true, true, true],
    positionLimit: 3,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 3),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, [], data, [{}, {}, {}, { 1: 4 }, { 1: 10 }], 3)
    },
    encode: (key: string) => Number(key)
  },
  'renxuan-renxuan3-zuliudanshi': {
    betCount: () => 3,
    noRepeat: true,
    noOrder: true,
    position: [false, false, true, true, true],
    positionLimit: 3,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 3),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, [], data, [{}, {}, {}, { 1: 4 }, { 1: 10 }], 3)
    },
    encode: (key: string) => Number(key)
  },
  'renxuan-renxuan3-hunhezuxuan': {
    betCount: () => 3,
    noBaozi: true,
    noOrder: true,
    position: [false, false, true, true, true],
    positionLimit: 3,
    encode: (key: string) => Number(key),
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 3),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, [], data, [{}, {}, {}, { 1: 4 }, { 1: 10 }], 3)
    }
  },
  'renxuan-renxuan2-zhixuanhezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 18, false),
    betCount: function () {
      return getPailieSumOfHezhi(this.betOptions[0].selected, 2, 0)
    },
    position: [false, false, false, true, true],
    positionLimit: 2,
    isSingleNum: true,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 2),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, { 1: 3 }, { 1: 6 }, { 1: 10 }], 2)
    }
  },
  'renxuan-renxuan3-zhixuanhezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 27, false),
    betCount: function () {
      return getPailieSumOfHezhi(this.betOptions[0].selected, 3, 0)
    },
    position: [false, false, true, true, true],
    positionLimit: 3,
    isSingleNum: true,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 3),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, {}, { 1: 4 }, { 1: 10 }], 3)
    }
  },
  'renxuan-renxuan2-zuxuanhezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 17, false),
    betCount: function () {
      return getPailieSumOfHezhiNoBaozi(this.betOptions[0].selected, 2)
    },
    position: [false, false, false, true, true],
    positionLimit: 2,
    isSingleNum: true,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 2),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, { 1: 3 }, { 1: 6 }, { 1: 10 }], 2)
    }
  },
  'renxuan-renxuan3-zuxuanhezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 26, false),
    betCount: function () {
      return getPailieSumOfHezhiNoBaozi(this.betOptions[0].selected, 3)
    },
    position: [false, false, true, true, true],
    positionLimit: 3,
    isSingleNum: true,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 3),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, {}, { 1: 4 }, { 1: 10 }], 3)
    }
  },
  'renxuan-renxuan2-zuxuanfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2),
    position: [false, false, false, true, true],
    positionLimit: 2,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 2),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, { 1: 3 }, { 1: 6 }, { 1: 10 }], 2)
    }
  },
  'renxuan-renxuan3-zusanfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2) * 2,
    position: [false, false, true, true, true],
    positionLimit: 3,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 3),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, {}, { 1: 4 }, { 1: 10 }], 3)
    }
  },
  'renxuan-renxuan4-zuxuan24': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 4),
    position: [false, true, true, true, true],
    positionLimit: 4,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 4),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, {}, {}, { 1: 5 }], 4)
    }
  },
  'renxuan-renxuan4-zuxuan12': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['DoubleNumber'], I18n.msg['options']['SingleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoDanhao(this.betOptions[0].selected, this.betOptions[1].selected, 2)
    },
    position: [false, true, true, true, true],
    positionLimit: 4,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 4),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, {}, {}, { 1: 5 }], 4)
    }
  },
  'renxuan-renxuan4-zuxuan6': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['DoubleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 2)
    },
    position: [false, true, true, true, true],
    positionLimit: 4,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 4),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, {}, {}, { 1: 5 }], 4)
    }
  },
  'renxuan-renxuan4-zuxuan4': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['Triple'], I18n.msg['options']['SingleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoDanhao(this.betOptions[0].selected, this.betOptions[1].selected, 1)
    },
    position: [false, true, true, true, true],
    positionLimit: 4,
    positionBetCount: function (num: number, position: Array<boolean>) {
      return positionBet(num, position, 4)
    },
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, {}, {}, { 1: 5 }], 4)
    }
  },
  'renxuan-renxuan3-zuliufushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 3),
    position: [false, false, true, true, true],
    positionLimit: 3,
    positionBetCount: (num: number, position: Array<boolean>) => positionBet(num, position, 3),
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper(this.position, this.betOptions, data, [{}, {}, {}, { 1: 4 }, { 1: 10 }], 3)
    }
  },
  'hezhi-wuxing-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 45, false),
    isSingleNum: true,
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.getProfitSSC.call(this, data)
    }
  },
  'wuxing-zhixuan-danshi': {
    betCount: () => 5,
    encode: (key: string) => Number(key)
  },
  'sixing-zhixuan-danshi': {
    betCount: () => 4,
    encode: (key: string) => Number(key)
  },
  'qiansan-zhixuan-danshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key)
  },
  'housan-zhixuan-danshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key)
  },
  'erxing-zhixuan-houerdanshi': {
    betCount: () => 2,
    encode: (key: string) => Number(key)
  },
  'erxing-zhixuan-qianerdanshi': {
    betCount: () => 2,
    encode: (key: string) => Number(key)
  },
  'qiansan-zuxuan-zusandanshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    isNeedRepeat: true,
    mustRepeatNum: 2,
    noBaozi: true,
    noOrder: true
  },
  'zhongsan-zuxuan-zusandanshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    isNeedRepeat: true,
    mustRepeatNum: 2,
    noBaozi: true,
    noOrder: true
  },
  'housan-zuxuan-zusandanshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    isNeedRepeat: true,
    mustRepeatNum: 2,
    noBaozi: true,
    noOrder: true
  },
  'qiansan-zuxuan-zuliudanshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    noRepeat: true,
    noOrder: true
  },
  'zhongsan-zuxuan-zuliudanshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    noRepeat: true,
    noOrder: true
  },
  'housan-zuxuan-zuliudanshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    noRepeat: true,
    noOrder: true
  },
  'erxing-zuxuan-houerdanshi': {
    betCount: () => 2,
    encode: (key: string) => Number(key),
    noRepeat: true,
    noOrder: true,
    noBaozi: true
  },
  'erxing-zuxuan-qianerdanshi': {
    betCount: () => 2,
    encode: (key: string) => Number(key),
    noRepeat: true,
    noBaozi: true,
    noOrder: true
  },
  'qiansan-zuxuan-hunhezuxuan': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    noBaozi: true,
    noOrder: true
  },
  'zhongsan-zuxuan-hunhezuxuan': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    noBaozi: true,
    noOrder: true
  },
  'housan-zuxuan-hunhezuxuan': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    noBaozi: true,
    noOrder: true
  },
  'zhongsan-zhixuan-danshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key)
  },
  'wuxing-zhixuan-zuhe': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY),
    betCount: (num: number) => 5 * num,
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.getProfitZuHe(data, 5)
    }
  },
  'sixing-zhixuan-zuhe': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(1)),
    betCount: (num: number) => 4 * num,
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.getProfitZuHe(data, 4)
    }
  },
  'qiansan-zhixuan-zuhe': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(0, 3)),
    betCount: (num: number) => 3 * num,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'zhongsan-zhixuan-zuhe': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(1, 4)),
    betCount: (num: number) => 3 * num,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'housan-zhixuan-zuhe': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2)),
    betCount: (num: number) => 3 * num,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'wuxing-zuxuan-zuxuan120': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 5)
  },
  'sixing-zuxuan-zuxuan24': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 4)
  },
  'erxing-zuxuan-houerfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2)
  },
  'erxing-zuxuan-qianerfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2)
  },
  'budingwei-sanxingbudingwei-housanermabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 3: 3 })
  },
  'budingwei-sanxingbudingwei-qiansanermabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 3: 3 })
  },
  'budingwei-sanxingbudingwei-zhongsanermabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 3: 3 })
  },
  'budingwei-sixingbudingwei-sixingermabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 3: 3, 6: 6 })
  },
  'budingwei-wuxingbudingwei-wuxingermabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 4: 4, 6: 6, 10: 10 })
  },
  'budingwei-wuxingbudingwei-wuxingsanmabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 3),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 4: 4, 6: 6, 10: 10 })
  },
  'wuxing-zuxuan-zuxuan60': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['DoubleNumber'], I18n.msg['options']['SingleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoDanhao(this.betOptions[0].selected, this.betOptions[1].selected, 3)
    }
  },
  'sixing-zuxuan-zuxuan12': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['DoubleNumber'], I18n.msg['options']['SingleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoDanhao(this.betOptions[0].selected, this.betOptions[1].selected, 2)
    }
  },
  'wuxing-zuxuan-zuxuan30': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['DoubleNumber'], I18n.msg['options']['SingleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoDanhao(this.betOptions[1].selected, this.betOptions[0].selected, 2)
    }
  },
  'wuxing-zuxuan-zuxuan20': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['Triple'], I18n.msg['options']['SingleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoDanhao(this.betOptions[0].selected, this.betOptions[1].selected, 2)
    }
  },
  'sixing-zuxuan-zuxuan4': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['Triple'], I18n.msg['options']['SingleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoDanhao(this.betOptions[0].selected, this.betOptions[1].selected, 1)
    }
  },
  'wuxing-zuxuan-zuxuan10': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['Triple'], I18n.msg['options']['DoubleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoDanhao(this.betOptions[0].selected, this.betOptions[1].selected, 1)
    }
  },
  'wuxing-zuxuan-zuxuan5': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['Quadruple'], I18n.msg['options']['SingleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoDanhao(this.betOptions[0].selected, this.betOptions[1].selected, 1)
    }
  },
  'sixing-zuxuan-zuxuan6': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, [I18n.msg['options']['DoubleNumber']]),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 2)
    }
  },
  'qiansan-zuxuan-zusan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 2) * 2
    }
  },
  'zhongsan-zuxuan-zusan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 2) * 2
    }
  },
  'housan-zuxuan-zusan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 2) * 2
    }
  },
  'qiansan-zuxuan-zuliu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 3)
    }
  },
  'zhongsan-zuxuan-zuliu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 3)
    }
  },
  'housan-zuxuan-zuliu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 3)
    }
  },
  'qiansan-zhixuan-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 27, false),
    betCount: function () {
      return getPailieSumOfHezhi(this.betOptions[0].selected, 3, 0)
    },
    isSingleNum: true
  },
  'zhongsan-zhixuan-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 27, false),
    betCount: function () {
      return getPailieSumOfHezhi(this.betOptions[0].selected, 3, 0)
    },
    isSingleNum: true
  },
  'housan-zhixuan-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 27, false),
    betCount: function () {
      return getPailieSumOfHezhi(this.betOptions[0].selected, 3, 0)
    },
    isSingleNum: true
  },
  'erxing-zhixuan-houerhezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 18, false),
    betCount: function () {
      return getPailieSumOfHezhi(this.betOptions[0].selected, 2, 0)
    },
    isSingleNum: true
  },
  'erxing-zhixuan-qianerhezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 18, false),
    betCount: function () {
      return getPailieSumOfHezhi(this.betOptions[0].selected, 2, 0)
    },
    isSingleNum: true
  },
  'qiansan-zuxuan-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 26, false),
    betCount: function () {
      return getPailieSumOfHezhiNoBaozi(this.betOptions[0].selected, 3)
    },
    isSingleNum: true,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeE(data, Util.toFixed(data.prize[0] * data.amountUnit * data.beishu - data.betAmt, 2), 2)
  },
  'zhongsan-zuxuan-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 26, false),
    betCount: function () {
      return getPailieSumOfHezhiNoBaozi(this.betOptions[0].selected, 3)
    },
    isSingleNum: true,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeE(data, Util.toFixed(data.prize[0] * data.amountUnit * data.beishu - data.betAmt, 2), 2)
  },
  'housan-zuxuan-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 26, false),
    betCount: function () {
      return getPailieSumOfHezhiNoBaozi(this.betOptions[0].selected, 3)
    },
    isSingleNum: true,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeE(data, Util.toFixed(data.prize[0] * data.amountUnit * data.beishu - data.betAmt, 2), 2)
  },
  'erxing-zuxuan-houerhezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 17, false),
    betCount: function () {
      return getPailieSumOfHezhiNoBaozi(this.betOptions[0].selected, 2)
    },
    isSingleNum: true
  },
  'erxing-zuxuan-qianerhezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 17, false),
    betCount: function () {
      return getPailieSumOfHezhiNoBaozi(this.betOptions[0].selected, 2)
    },
    isSingleNum: true
  },
  'qiansan-zhixuan-kuadu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieDOfKuadu(this.betOptions[0].selected, 3)
    }
  },
  'zhongsan-zhixuan-kuadu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieDOfKuadu(this.betOptions[0].selected, 3)
    }
  },
  'housan-zhixuan-kuadu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieDOfKuadu(this.betOptions[0].selected, 3)
    }
  },
  'erxing-zhixuan-houerkuadu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieDOfKuadu(this.betOptions[0].selected, 2)
    }
  },
  'erxing-zhixuan-qianerkuadu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieDOfKuadu(this.betOptions[0].selected, 2)
    }
  },
  'quwei-teshu-yifanfengshun': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 })
  },
  'quwei-teshu-haoshichengshuang': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2 })
  },
  'quwei-teshu-sanxingbaoxi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false)
  },
  'quwei-teshu-sijifacai': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false)
  },
  'budingwei-sanxingbudingwei-housanyimabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'budingwei-sanxingbudingwei-qiansanyimabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'budingwei-sanxingbudingwei-zhongsanyimabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'budingwei-sixingbudingwei-sixingyimabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3, 4: 4 })
  },
  'qiansan-zuxuan-baodan': {
    betOptions: betOptionsGenerator.generatNumberBetOptionsSpcial(0, 9, false),
    betCount: (num: number) => num * 54,
    limit: 1
  },
  'zhongsan-zuxuan-baodan': {
    betOptions: betOptionsGenerator.generatNumberBetOptionsSpcial(0, 9, false),
    betCount: (num: number) => num * 54,
    limit: 1
  },
  'housan-zuxuan-baodan': {
    betOptions: betOptionsGenerator.generatNumberBetOptionsSpcial(0, 9, false),
    betCount: (num: number) => num * 54,
    limit: 1
  },
  'erxing-zuxuan-houerbaodan': {
    betOptions: betOptionsGenerator.generatNumberBetOptionsSpcial(0, 9, false),
    betCount: (num: number) => num * 9,
    limit: 1
  },
  'erxing-zuxuan-qianerbaodan': {
    betOptions: betOptionsGenerator.generatNumberBetOptionsSpcial(0, 9, false),
    betCount: (num: number) => num * 9,
    limit: 1
  },
  'qiansan-qita-hezhiweishu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false)
  },
  'zhongsan-qita-hezhiweishu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false)
  },
  'housan-qita-hezhiweishu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false)
  },
  'qiansan-qita-teshuhaoma': {
    betOptions: betOptionsGenerator.generatBetOptions(I18n.msg['options']['TeShuHaoMa']),
    encode: BaoZiShunZiDuiZiEncode,
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.getProfitSSC.call(this, data)
    }
  },
  'zhongsan-qita-teshuhaoma': {
    betOptions: betOptionsGenerator.generatBetOptions(I18n.msg['options']['TeShuHaoMa']),
    encode: BaoZiShunZiDuiZiEncode,
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.getProfitSSC.call(this, data)
    }
  },
  'housan-qita-teshuhaoma': {
    betOptions: betOptionsGenerator.generatBetOptions(I18n.msg['options']['TeShuHaoMa']),
    encode: BaoZiShunZiDuiZiEncode,
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.getProfitSSC.call(this, data)
    }
  },
  'hezhi-wuxing-bsde': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY),
    encode: DaXiaoDanShuangEncode
  },
  'daxiaodanshuang-daxiaodanshuang-houerdaxiaodanshuang': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(3)),
    encode: DaXiaoDanShuangEncode
  },
  'daxiaodanshuang-daxiaodanshuang-housandaxiaodanshuang': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(2)),
    encode: DaXiaoDanShuangEncode
  },
  'daxiaodanshuang-daxiaodanshuang-qianerdaxiaodanshuang': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(0, 2)),
    encode: DaXiaoDanShuangEncode
  },
  'daxiaodanshuang-daxiaodanshuang-qiansandaxiaodanshuang': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(0, 3)),
    encode: DaXiaoDanShuangEncode
  },
  'daxiaodanshuang-daxiaodanshuang-zhongsandaxiaodanshuang': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(1, 4)),
    encode: DaXiaoDanShuangEncode
  },
  'quwei-quwei-wumaquweisanxing': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_ARRAY, false, DIGIT_ARRAY.slice(0, 2)).concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2))),
    encode: (key: keyof typeof DaXiao, index: number) => (index < 2 ? DaXiao[key] : key)
  },
  'quwei-quwei-simaquweisanxing': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_ARRAY, false, DIGIT_ARRAY.slice(1, 2)).concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2))),
    encode: (key: keyof typeof DaXiao, index: number) => (index < 1 ? DaXiao[key] : key)
  },
  'quwei-quwei-housanquweierxing': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_ARRAY, false, DIGIT_ARRAY.slice(2, 3)).concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(3))),
    encode: (key: keyof typeof DaXiao, index: number) => (index < 1 ? DaXiao[key] : key)
  },
  'quwei-quwei-qiansanquweierxing': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_ARRAY, false, DIGIT_ARRAY.slice(0, 1)).concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(1, 3))),
    encode: (key: keyof typeof DaXiao, index: number) => (index < 1 ? DaXiao[key] : key)
  },
  'quwei-quwei-zhongsanquweierxing': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_ARRAY, false, DIGIT_ARRAY.slice(1, 2)).concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2, 4))),
    encode: (key: keyof typeof DaXiao, index: number) => (index < 1 ? DaXiao[key] : key)
  },
  'quwei-qujian-wumaqujiansanxing': {
    betOptions: betOptionsGenerator.generatBetOptions(QUJIAN_ARRAY, false, DIGIT_ARRAY.slice(0, 2)).concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2))),
    encode: (key: keyof typeof QuJian, index: number) => (index < 2 ? QuJian[key] : key)
  },
  'quwei-qujian-simaqujiansanxing': {
    betOptions: betOptionsGenerator.generatBetOptions(QUJIAN_ARRAY, false, [I18n.msg['options']['Digits'][1]]).concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2))),
    encode: (key: keyof typeof QuJian, index: number) => (index < 1 ? QuJian[key] : key)
  },
  'quwei-qujian-housanqujianerxing': {
    betOptions: betOptionsGenerator.generatBetOptions(QUJIAN_ARRAY, false, [I18n.msg['options']['Digits'][2]]).concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(3))),
    encode: (key: keyof typeof QuJian, index: number) => (index < 1 ? QuJian[key] : key)
  },
  'quwei-qujian-qiansanqujianerxing': {
    betOptions: betOptionsGenerator
      .generatBetOptions(QUJIAN_ARRAY, false, [I18n.msg['options']['Digits'][0]])
      .concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(1, 3))),
    encode: (key: keyof typeof QuJian, index: number) => (index < 1 ? QuJian[key] : key)
  },
  'quwei-qujian-zhongsanqujianerxing': {
    betOptions: betOptionsGenerator
      .generatBetOptions(QUJIAN_ARRAY, false, [I18n.msg['options']['Digits'][1]])
      .concat(betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2, 4))),
    encode: (key: keyof typeof QuJian, index: number) => (index < 1 ? QuJian[key] : key)
  },
  'longhu-longhuhe-wanqian': generatLongHuHeRule(`${I18n.msg['options']['TenThousand']}:${I18n.msg['options']['Thousand']}`),
  'longhu-longhuhe-wanbai': generatLongHuHeRule(`${I18n.msg['options']['TenThousand']}:${I18n.msg['options']['Hundred']}`),
  'longhu-longhuhe-wanshi': generatLongHuHeRule(`${I18n.msg['options']['TenThousand']}:${I18n.msg['options']['Ten']}`),
  'longhu-longhuhe-wange': generatLongHuHeRule(`${I18n.msg['options']['TenThousand']}:${I18n.msg['options']['Digit']}`),
  'longhu-longhuhe-qianbai': generatLongHuHeRule(`${I18n.msg['options']['Thousand']}:${I18n.msg['options']['Hundred']}`),
  'longhu-longhuhe-qianshi': generatLongHuHeRule(`${I18n.msg['options']['Thousand']}:${I18n.msg['options']['Ten']}`),
  'longhu-longhuhe-qiange': generatLongHuHeRule(`${I18n.msg['options']['Thousand']}:${I18n.msg['options']['Digit']}`),
  'longhu-longhuhe-baishi': generatLongHuHeRule(`${I18n.msg['options']['Hundred']}:${I18n.msg['options']['Ten']}`),
  'longhu-longhuhe-baige': generatLongHuHeRule(`${I18n.msg['options']['Hundred']}:${I18n.msg['options']['Digit']}`),
  'longhu-longhuhe-shige': generatLongHuHeRule(`${I18n.msg['options']['Ten']}:${I18n.msg['options']['Digit']}`)
}
