import Validator from './Validator'

export default function getInputDanshi(this: any, input: string, limit: number = 11) {
  var arr: any = []
  var noRepeat = this.noRepeat // 是否允许重复
  var noBaozi = this.noBaozi // 是否允许豹子
  var sxArr: Array<string> = input.split('|')
  for (var i = 0; i < sxArr.length; i++) {
    var newArr: Array<string> = sxArr[i].split(' ')
    var isFuhebiaozhun: boolean = newArr.every(function (ele: string) {
      return Number(ele) <= limit && Number(ele) >= 1 && ele.length === 2
    })
    if (noRepeat && Validator.judgeChongfu(newArr)) {
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
