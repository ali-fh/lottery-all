import { toFixed } from '../utils'
import { OptionSection, ProfitParams } from '../Interfases'
import Calculator from './Calculator'
import { DaXiaoDanShuang } from '../encoders/DaXiaoDanShuang'

export default class extends Calculator {
  public getProfitGuanYaHeZhi(params: ProfitParams, selectedArr: Array<string>): string {
    let arr: number[] = []
    selectedArr.forEach((element: any) => {
      arr.push(Number(params.prize[Number(DaXiaoDanShuang[element])]))
    })
    arr.sort(function (a, b) {
      return a - b
    })
    let basicProfit: string = toFixed(arr[0] * params.amountUnit * params.beishu - params.betAmt, 2)
    if (selectedArr.length === 1) {
      return basicProfit
    } else {
      return `${basicProfit} ~ ${toFixed(arr[arr.length - 1] * params.amountUnit * params.beishu - params.betAmt, 2)}`
    }
  }

  public profitTypeCWrapper(this: any, data: ProfitParams) {
    let position: number = 0
    let test = [{ '1': 1 }, { '1': 2 }, { '1': 3 }, { '1': 4 }, { '1': 5 }, { '1': 6 }, { '1': 7 }, { '1': 8 }, { '1': 9 }, { '1': 10 }]
    this.list.forEach((element: OptionSection) => {
      if (element.selected.length) position++
    })
    return super.profitTypeC(data, test, 1, position)
  }
}
