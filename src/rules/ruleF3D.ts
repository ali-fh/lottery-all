import { OptionSection, ProfitParams } from '../Interfases'
import BetOptionsGenerator from '../BetOptionsGenerator'
import Calculator from '../Calculator'
import Util from '../Util'
import { encode as DaXiaoDanShuangEncode } from '../encoders/DaXiaoDanShuang'
import Combination from '../Combination'
import { I18n } from '../i18n'

const betOptionsGenerator = new BetOptionsGenerator()
const ProfitCalculator = new Calculator()
const combination = new Combination()

const DIGIT_ARRAY = I18n.msg['options']['Digits']
const DA_XIAO_DAN_XHUANG_ARRAY = [I18n.msg['options']['Big'], I18n.msg['options']['Small'], I18n.msg['options']['Single'], I18n.msg['options']['Double']]

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

/** 二重号排列组合 */
function getPailieOfErchonghaoSingle(data: Array<string>, limit: number) {
  if (data.length < limit) return 0
  var numArr: Array<string> = []
  combination.getAllPailieZuHeBuTongHao(data, limit, numArr, '', false)
  return numArr.length
}

export default {
  'daxiaodanshuang-daxiaodanshuang-qianerdaxiaodanshuang': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(2, 4)),
    encode: DaXiaoDanShuangEncode
  },
  'daxiaodanshuang-daxiaodanshuang-houerdaxiaodanshuang': {
    betOptions: betOptionsGenerator.generatBetOptions(DA_XIAO_DAN_XHUANG_ARRAY, false, DIGIT_ARRAY.slice(3)),
    encode: DaXiaoDanShuangEncode
  },
  'yixing-dingweidan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2)),
    betCount: function () {
      return this.betOptions.reduce((sum: number, element: OptionSection) => sum + element.selected.length, 0)
    },
    getProfit: function (data: ProfitParams) {
      return ProfitCalculator.profitWrapper([], this.betOptions, data, [{ 1: 1 }, { 1: 2 }, { 1: 3 }], 1)
    }
  },
  'erxing-zhixuan-qianerfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2, 4))
  },
  'erxing-zhixuan-houerfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(3))
  },
  'erxing-zuxuan-qianerfushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2)
  },
  'erxing-zuxuan-qianerdanshi': {
    betCount: () => 2,
    encode: (key: string) => Number(key),
    noRepeat: true,
    noBaozi: true,
    noOrder: true
  },
  'erxing-zuxuan-houerdanshi': {
    betCount: () => 2,
    encode: (key: string) => Number(key),
    noRepeat: true,
    noOrder: true,
    noBaozi: true
  },
  'erxing-zhixuan-qianerdanshi': {
    betCount: () => 2,
    encode: (key: string) => Number(key)
  },
  'erxing-zhixuan-houerdanshi': {
    betCount: () => 2,
    encode: (key: string) => Number(key)
  },
  'housan-zhixuan-fushi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false, DIGIT_ARRAY.slice(2))
  },
  'housan-zhixuan-danshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key)
  },
  'housan-zuxuan-zusandanshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    isNeedRepeat: true,
    mustRepeatNum: 2,
    noBaozi: true,
    noOrder: true
  },
  'housan-zuxuan-zuliudanshi': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    noRepeat: true,
    noOrder: true
  },
  'housan-zuxuan-hunhezuxuan': {
    betCount: () => 3,
    encode: (key: string) => Number(key),
    noBaozi: true,
    noOrder: true
  },
  'housan-zhixuan-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 27, false),
    betCount: function () {
      return getPailieSumOfHezhi(this.betOptions[0].selected, 3, 0)
    },
    isSingleNum: true
  },
  'housan-zuxuan-hezhi': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(1, 26, false),
    betCount: function () {
      return getPailieSumOfHezhiNoBaozi(this.betOptions[0].selected, 3)
    },
    isSingleNum: true,
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeE(data, Util.toFixed(data.prize[0] * data.amountUnit * data.beishu - data.betAmt, 2), 2)
  },
  'housan-zuxuan-zusan': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 2) * 2
    }
  },
  'housan-zuxuan-zuliu': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: function () {
      return getPailieOfErchonghaoSingle(this.betOptions[0].selected, 3)
    }
  },
  'budingwei-sanxingbudingwei-housanyimabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 2: 2, 3: 3 })
  },
  'budingwei-sanxingbudingwei-housanermabudingwei': {
    betOptions: betOptionsGenerator.generatNumberBetOptions(0, 9, false),
    betCount: (num: number) => getPailieByNoLabel(num, 2),
    getProfit: (data: ProfitParams) => ProfitCalculator.profitTypeA(data, { 1: 1, 3: 3 })
  }
}
