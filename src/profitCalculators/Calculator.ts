import { toFixed } from '../utils'
import { ProfitParams } from '../Interfases'

interface Test {
  [propName: string]: number
}

export default class {
  // private basicProfit: string = ''
  // private maxProfit: string = ''
  // private profitParams: ProfitParams
  private MAXIMUN: number = 400000

  // constructor(params: ProfitParams) {
  //   this.profitParams = params
  //   this.basicProfit = toFixed(params.prizeAmt * params.amountUnit * params.beishu - params.betAmt, 2)
  // }

  getMaximunProfit(profit: number, params: ProfitParams): string {
    if (profit >= this.MAXIMUN) {
      return toFixed(this.MAXIMUN * params.amountUnit - params.betAmt, 2)
    } else {
      return toFixed(profit - params.betAmt, 2)
    }
  }

  profitBasic(params: ProfitParams): string {
    const profit: number = params.prize * params.amountUnit * params.beishu
    return this.getMaximunProfit(profit, params)
  }

  profitTypeA(params: ProfitParams, test: Test): string {
    const basicProfit = toFixed(params.prize * params.amountUnit * params.beishu - params.betAmt, 2)

    if (params.betCount === 1) {
      return basicProfit
    } else {
      let maxProfit: string = ''
      if (params.betCount) {
        if (test[params.betCount]) {
          maxProfit = this.getMaximunProfit(params.prize * test[params.betCount] * params.amountUnit * params.beishu, params)
        } else {
          maxProfit = this.getMaximunProfit(params.prize * test[Object.keys(test)[Object.keys(test).length - 1]] * params.amountUnit * params.beishu, params)
        }
      }
      return `${basicProfit} ~ ${maxProfit}`
    }
  }

  // profitTypeB(): string {
  //   return `${this.basicProfit} ~ ${this.getMaximunProfit(this.profitParams.prizeAmt * this.profitParams.amountUnit * this.profitParams.beishu)}`
  // }
}
