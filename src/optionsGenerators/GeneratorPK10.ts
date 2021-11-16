import Generator from './Generator'
import { OptionSection } from '../Interfases'

export default class extends Generator {
  public getDragonWithTiger(labelArray: Array<string>): Array<OptionSection> {
    return labelArray.map((element: string, index: number) => {
      const optionsArray: Array<string> = []

      for (var i = 1; i <= 10; i++) {
        const num = index + 1
        if (num !== i) optionsArray.push(num + '龙' + i + '虎')
      }

      return super.generatBetOptions(optionsArray, false, labelArray.slice(index, index + 1))[0]
    })
  }
}
