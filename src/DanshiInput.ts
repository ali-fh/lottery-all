import Validator from './Validator'
import Util from './Util'

export default class {
  public getInput(this: any, input: string, limit: number = 11) {
    var arr: any = []
    var sxArr: Array<string> = input.split('|')
    for (var i = 0; i < sxArr.length; i++) {
      var newArr: Array<string> = sxArr[i].split(' ')
      var isFuhebiaozhun: boolean = newArr.every(function (ele: string) {
        return Number(ele) <= limit && Number(ele) >= 1 && ele.length === 2
      })
      if (this.noRepeat && Validator.hasDuplicates(newArr)) {
        continue
      }
      if (this.noBaozi && Validator.judgeBaozi(newArr, this.betCount() - 1)) {
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

  public getInputSSC(this: any, input: string) {
    var betArr = input.toString().split(/\s+|\|+|\,+/)
    var arr: any = []

    for (var i = 0; i < betArr.length; i++) {
      if (/[^0-9]/.test(betArr[i])) {
        continue // 如果包含数字以外的内容，则去掉
      }
      if (betArr[i].length !== this.betCount()) {
        continue // 如果长度不一致，则去掉
      }
      if (this.noRepeat && Util.getMaxCount(betArr[i]) >= 2) {
        continue // 如果有重复去掉
      }
      if (this.isNeedRepeat && Util.getMaxCount(betArr[i]) < this.mustRepeatNum) {
        continue // 如果必须重复且小于重复次数去掉
      }
      if (this.noBaozi && Util.getMaxCount(betArr[i]) === this.betCount()) {
        continue // 有豹子去掉
      }
      if (this.noOrder && Validator.judgeRepeatBySort(arr, betArr[i])) {
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
