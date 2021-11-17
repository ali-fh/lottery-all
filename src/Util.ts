interface Counts {
  [key: string]: number
}

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
  public static getMaxCount(inputString: string): number {
    let counts: Counts = {}
    inputString.split('').forEach((element) => {
      counts[element] = (counts[element] || 0) + 1
    })
    return Math.max(...Object.values(counts))
  }

  /** 检测某个字符串出现的次数 */
  public static judgeCharRepeatNum(str: string, char: string) {
    var result = str.match(new RegExp(char, 'g'))
    return !result ? 0 : result.length
  }
}
