import { OptionSection } from './Interfases'
import { I18n } from './i18n'

export default class {
  public generatBetOptions(options: Array<string>, quickSupport: boolean = false, digitLabels: Array<string> = ['']): Array<OptionSection> {
    return digitLabels.map((label: string) => {
      return {
        label,
        options,
        selected: [],
        quickSupport
      }
    })
  }

  public generatNumberBetOptions(from: number, to: number, doubleDigit: boolean, titles?: Array<string>): Array<OptionSection> {
    return this.generatBetOptions(
      Array.from({ length: to - from + 1 }, (v, i) => i + from).map((element) => (doubleDigit ? ('0' + element).slice(-2) : String(element))),
      true,
      titles ? titles : ['']
    )
  }

  public generatNumberBetOptionsSpcial(from: number, to: number, doubleDigit: boolean, titles?: Array<string>): Array<OptionSection> {
    return this.generatBetOptions(
      Array.from({ length: to - from + 1 }, (v, i) => i + from).map((element) => (doubleDigit ? ('0' + element).slice(-2) : String(element))),
      false,
      titles ? titles : ['']
    )
  }

  public generatDanTuoBetOptions(from: number, to: number, doubleDigit: boolean, titles?: Array<string>): Array<OptionSection> {
    return this.generatBetOptions(
      Array.from({ length: to - from + 1 }, (v, i) => i + from).map((element) => (doubleDigit ? ('0' + element).slice(-2) : String(element))),
      false,
      titles ? titles : ['']
    )
  }

  public generatErTongHao(): Array<OptionSection> {
    let data: Array<string> = []
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 6; j++) {
        if (j !== i) {
          data.push(i < j ? '' + i + i + j : '' + j + i + i)
        }
      }
    }
    return this.generatBetOptions(data)
  }

  public getDragonWithTiger(labelArray: Array<string>): Array<OptionSection> {
    return labelArray.map((element: string, index: number) => {
      const optionsArray: Array<string> = []

      for (var i = 1; i <= 10; i++) {
        const num = index + 1
        if (num !== i) optionsArray.push(num + I18n.msg['options']['Dragon'] + i + I18n.msg['options']['Tiger'])
      }

      return this.generatBetOptions(optionsArray, false, labelArray.slice(index, index + 1))[0]
    })
  }
}
