import Validator from './Validator'
import Util from './Util'

export default class {
  public stringFilter(input: string, maximum: number = 11, lentghLimit: number): Array<String> {
    var arr: any = []
    var sxArr: Array<string> = input.split('|')
    for (var i = 0; i < sxArr.length; i++) {
      const newArr: Array<string> = sxArr[i].split(' ')
      const isFuhebiaozhun: boolean = newArr.every(function (element: string) {
        return Number(element) <= maximum && Number(element) >= 1 && element.length === 2
      })

      if (Validator.hasDuplicates(newArr)) {
        continue
      }
      if (Validator.judgeBaozi(newArr, lentghLimit - 1)) {
        continue
      }
      if (newArr.length === lentghLimit && isFuhebiaozhun) {
        arr.push(sxArr[i])
      }
    }
    return Array.from(new Set(arr))
  }

  public getInputSSC(this: any, input: string): Array<string> {
    var betArr = input.toString().split(/\s+|\|+|\,+/)
    var arr: any = []

    for (var i = 0; i < betArr.length; i++) {
      if (/[^0-9]/.test(betArr[i])) {
        continue // 如果包含数字以外的内容，则去掉
      }
      if (betArr[i].length !== this.betCount()) {
        continue // 如果长度不一致，则去掉
      }
      if (this.noRepeat && Util.getDuplicate(betArr[i]) >= 2) {
        continue // 如果有重复去掉
      }
      if (this.isNeedRepeat && Util.getDuplicate(betArr[i]) < this.mustRepeatNum) {
        continue // 如果必须重复且小于重复次数去掉
      }
      if (this.noBaozi && Util.getDuplicate(betArr[i]) === this.betCount()) {
        continue // 有豹子去掉
      }
      if (this.noOrder && Validator.judgeRepeatBySort(arr, betArr[i])) {
        continue // 去掉顺序不限重复
      }
      arr.push(betArr[i])
    }
    return Array.from(new Set(arr))
  }
}
