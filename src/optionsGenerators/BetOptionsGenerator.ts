import { OptionSection } from '../Interfases'

export default class {
  public generatBetOptions(options: Array<string>, quickSupport: boolean = false, digitLabels: Array<string> = ['']): Array<OptionSection> {
    let data: Array<OptionSection> = []
    digitLabels.forEach((label: string) =>
      data.push({
        label,
        options,
        selected: [],
        quickSupport: quickSupport ? options.length > 6 : false
      })
    )
    return data
  }

  public generatButtonNumbers(from: number, to: number, doubleDigit: boolean): Array<string> {
    var data = Array<string>()
    for (var i = from; i <= to; i++) {
      if (doubleDigit) {
        var str = ('0' + i).slice(-2)
        data.push(str)
      } else {
        data.push(String(i))
      }
    }
    return data
  }

  public getAllPailieZuHeBuTongHao(data: any, len: number, numArr: any, prefix: string | number, isRepeat: boolean = false) {
    for (var i = 0; i < data.length; i++) {
      if (len === 1) {
        numArr.push(prefix + data[i])
      } else {
        var newData = data.concat()
        if (!isRepeat) newData.splice(0, i + 1)
        this.getAllPailieZuHeBuTongHao(newData, len - 1, numArr, prefix + data[i], isRepeat)
      }
    }
  }
}
