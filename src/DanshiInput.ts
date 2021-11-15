import Validator from './Validator'
import Util from './Util'

export default class {
  public static getInput(this: any, input: string, limit: number = 11) {
    var arr: any = []
    var noRepeat = this.noRepeat // 是否允许重复
    var noBaozi = this.noBaozi // 是否允许豹子
    var sxArr: Array<string> = input.split('|')
    for (var i = 0; i < sxArr.length; i++) {
      var newArr: Array<string> = sxArr[i].split(' ')
      var isFuhebiaozhun: boolean = newArr.every(function (ele: string) {
        return Number(ele) <= limit && Number(ele) >= 1 && ele.length === 2
      })
      if (noRepeat && Validator.hasDuplicates(newArr)) {
        continue
      }
      if (noBaozi && Validator.judgeBaozi(newArr, this.betCount() - 1)) {
        continue
      }
      if (arr.includes(sxArr[i])) {
        continue
      }
      if (newArr.length === this.betCount() && isFuhebiaozhun) {
        arr.push(sxArr[i])
      }
    }
    return arr
  }

  public static getInputSSC(this: any, input: string) {
    var betArr = input.toString().split(/\s+|\|+|\,+/)
    var arr: any = []
    var noRepeat = this.noRepeat // 是否允许重复
    var noBaozi = this.noBaozi // 是否允许豹子
    var isNeedRepeat = this.isNeedRepeat // 是否必须重复
    var mustRepeatNum = this.mustRepeatNum // 必须重复的次数
    var noOrder = this.noOrder // 是否顺序不限

    for (var i = 0; i < betArr.length; i++) {
      if (/[^0-9]/.test(betArr[i])) {
        continue // 如果包含数字以外的内容，则去掉
      }
      if (betArr[i].length !== this.betCount()) {
        continue // 如果长度不一致，则去掉
      }
      if (noRepeat && Util.getMaxRepeatNumFormStr(betArr[i]) >= 2) {
        continue // 如果有重复去掉
      }
      if (isNeedRepeat && Util.getMaxRepeatNumFormStr(betArr[i]) < mustRepeatNum) {
        continue // 如果必须重复且小于重复次数去掉
      }
      if (noBaozi && Util.getMaxRepeatNumFormStr(betArr[i]) === this.betCount()) {
        continue // 有豹子去掉
      }
      if (noOrder && Validator.judgeRepeatBySort(arr, betArr[i])) {
        continue // 去掉顺序不限重复
      }
      if (arr.includes(betArr[i])) {
        continue // 去掉重复
      }
      arr.push(betArr[i])
    }

    return arr
  }
}
