import BetOptionsGenerator from './BetOptionsGenerator'
import { OptionSection } from '../Interfases'

export default class extends BetOptionsGenerator {
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
}
