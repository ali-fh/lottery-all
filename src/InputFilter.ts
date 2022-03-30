import Util from './Util'

export default class InputFilter {
  public stringFilter(input: string, maximum: number = 11, lentghLimit: number): Array<String> {
    const arr: any = []
    const sxArr: Array<string> = input.split(/\|+|\,+|\n+|;+/)

    for (let i = 0; i < sxArr.length; i++) {
      const newArr: Array<string> = sxArr[i].split(' ')
      if (new Set(newArr).size < newArr.length) continue
      if (newArr.length === lentghLimit && newArr.every((element: string) => Number(element) <= maximum && Number(element) >= 1 && element.length === 2)) {
        arr.push(sxArr[i])
      }
    }
    return Array.from(new Set(arr))
  }

  public stringFilterSSC(this: any, input: string): Array<string> {
    var betArr = input.split(/\s+|\|+|\,+|\n+|;+/)
    var arr: any = []

    for (var i = 0; i < betArr.length; i++) {
      var newArr = betArr[i].split('')
      if (
        !newArr.every((ele) => Number(ele) <= 9 && Number(ele) >= 0 && ele.length === 1) || // 如果包含数字以外的内容，则去掉
        newArr.length !== this.betCount() || // 如果长度不一致，则去掉
        (this.noRepeat && Util.getDuplicate(newArr) >= 2) || // 如果有重复去掉
        (this.isNeedRepeat && Util.getDuplicate(newArr) < this.mustRepeatNum) || // 如果必须重复且小于重复次数去掉
        (this.noBaozi && Util.getDuplicate(newArr) === this.betCount()) || // 有豹子去掉
        (this.noOrder && arr.some((element: string) => element.split('').sort().join('') === betArr[i].split('').sort().join(''))) // 去掉顺序不限重复
      ) {
        continue
      }
      arr.push(betArr[i])
    }
    return Array.from(new Set(arr))
  }
}
