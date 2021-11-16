export default class {
  /** 判断是否有重复 */
  public static hasDuplicates = (arr: string[]): boolean => new Set(arr).size < arr.length

  /** 判断是否有豹子 */
  public static judgeBaozi(arr: string[], max: number) {
    var total = 0
    for (var i = 0; i < arr.length; i++) {
      var newTotal = 0
      arr.forEach(function (ele) {
        if (ele === arr[i]) {
          newTotal++
        }
      })
      total = newTotal > total ? newTotal : total
    }
    return total >= max && total > 1
  }

  /** 检测排序后是否重复 */
  public static judgeRepeatBySort(arr: string[], str: string) {
    str = str.split('').sort().join('')
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i].split('').sort().join('')
      if (ele === str) {
        return true
      }
    }
    return false
  }
}
