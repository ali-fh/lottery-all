export function toFixed(num: number, len: number = 1): string {
  var str = num.toString()
  var index = str.indexOf('.')
  var str0 = Array(len).fill(0).join('')
  if (index !== -1) {
    str = str + str0
    return str.slice(0, index + len + 1)
  } else {
    return str + '.' + str0
  }
}
