import Util from '../Util'
import { ProfitParams } from '../Interfases'
import Calculator from './Calculator'

export default class extends Calculator {
  public getProfitHeZhi(params: ProfitParams, selectedArr: Array<string>): string {
    let arr: number[] = []
    selectedArr.forEach((element: string) => {
      arr.push(Number(params.prize[Number(element)]))
    })

    arr.sort(function (a, b) {
      return a - b
    })

    const basicProfit: string = Util.toFixed(arr[0] * params.amountUnit * params.beishu - params.betAmt, 2)
    if (selectedArr.length === 1) {
      return basicProfit
    } else {
      return `${basicProfit} ~ ${Util.toFixed(arr[arr.length - 1] * params.amountUnit * params.beishu - params.betAmt, 2)}`
    }
  }
}
