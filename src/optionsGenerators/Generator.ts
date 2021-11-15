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
        data.push(('0' + i).slice(-2))
      } else {
        data.push(String(i))
      }
    }
    return data
  }
}
