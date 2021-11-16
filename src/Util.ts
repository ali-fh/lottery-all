export default class {
  public static toFixed(num: number, len: number = 1): string {
    let str = num.toString()
    const index = str.indexOf('.')
    const str0 = Array(len).fill(0).join('')
    if (index !== -1) {
      str = str + str0
      return str.slice(0, index + len + 1)
    } else {
      return str + '.' + str0
    }
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
    var result = str.match(new RegExp(char, 'g'))
    return !result ? 0 : result.length
  }
}
