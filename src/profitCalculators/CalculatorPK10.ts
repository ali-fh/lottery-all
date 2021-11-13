import { toFixed } from '../utils'
import { ProfitParams } from '../Interfases'
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
}
