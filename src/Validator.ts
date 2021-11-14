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

  /** 检测字符串数组中，重复最大值 */
  public static getMaxRepeatNumFormStr(str: string) {
    var max = 0
    for (var i = 0; i < str.length; i++) {
      var num = this.judgeCharRepeatNum(str, str[i])
      max = max < num ? num : max
    }
    return max
  }

  /** 检测某个字符串出现的次数 */
  public static judgeCharRepeatNum(str: string, char: string) {
    var regex = new RegExp(char, 'g')
    var result = str.match(regex)
    var count = !result ? 0 : result.length
    return count
  }
}
