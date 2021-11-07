import Generator from './Generator'
import { OptionSection } from '../Interfases'

export default class extends Generator {
  public getDragonWithTiger(labelArray: Array<string>): Array<OptionSection> {
    let data: OptionSection[] = []

    labelArray.forEach((element: string, index: number) => {
      const optionsArray: Array<string> = []

      for (var i = 1; i <= 10; i++) {
        var num = index + 1
        if (num !== i) {
          optionsArray.push(num + '龙' + i + '虎')
        }
      }

      data = data.concat(super.generatBetOptions(optionsArray, false, labelArray.slice(index, index + 1)))
    })
    return data
  }

  public generatBetOptionsPK10(titles?: Array<string>) {
    if (titles) {
      super.generatBetOptions(super.generatButtonNumbers(1, 10, false), true, titles)
    } else {
      super.generatBetOptions(super.generatButtonNumbers(1, 10, false), true)
    }
  }
}
