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

  public static getDuplicate(inputString: string | Array<string>, char?: string): number {
    const counts: { [key: string]: number } = {}
    const values: Array<string> = typeof inputString === 'string' ? inputString.split('') : inputString
    values.forEach((element: string) => {
      counts[element] = (counts[element] || 0) + 1
    })
    return char ? counts[char] || 0 : Math.max(...Object.values(counts))
  }
}
