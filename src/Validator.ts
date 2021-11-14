export default class {
  /** 判断是否有重复 */
  public static judgeChongfu(arr: string[]) {
    for (var i = 0; i < arr.length; i++) {
      var newTotal = 0
      arr.forEach(function (ele) {
        if (ele === arr[i]) {
          newTotal++
        }
      })
      if (newTotal > 1) {
        return true
      }
    }
    return false
  }

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
    var strArr = str.split('')
    strArr.sort()
    str = strArr.join('')
    for (var i = 0; i < arr.length; i++) {
      var eleArr = arr[i].split('')
      eleArr.sort()
      var ele = eleArr.join('')
      if (ele === str) {
        return true
      }
    }
    return false
  }
}
