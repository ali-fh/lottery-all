import { toFixed } from './utils'
import { ProfitParams } from './Interfases'

// interface Test {
//   [propName: string]: number
// }

export default class {
  // private basicProfit: string = ''
  // private maxProfit: string = ''
  // private profitParams: ProfitParams
  private MAXIMUN: number = 400000

  // constructor(params: ProfitParams) {
  //   this.profitParams = params
  //   this.basicProfit = toFixed(params.prizeAmt * params.amountUnit * params.beishu - params.betAmt, 2)
  // }

  // getMaximunProfit(profit: number): string {
  //   if (profit >= this.MAXIMUN) {
  //     return toFixed(this.MAXIMUN * this.profitParams.amountUnit - this.profitParams.betAmt, 2)
  //   } else {
  //     return toFixed(profit - this.profitParams.betAmt, 2)
  //   }
  // }

  profitBasic(params: ProfitParams): string {
    const profit: number = params.prize * params.amountUnit * params.beishu
    if (profit >= this.MAXIMUN) {
      return toFixed(this.MAXIMUN * params.amountUnit - params.betAmt, 2)
    } else {
      return toFixed(profit - params.betAmt, 2)
    }
  }

  // profitTypeA(test: Test): string {
  //   if (this.profitParams.betCount === 1) {
  //     return this.basicProfit
  //   } else {
  //     if (test[this.profitParams.betCount]) {
  //       this.maxProfit = this.getMaximunProfit(this.profitParams.prizeAmt * test[this.profitParams.betCount] * this.profitParams.amountUnit * this.profitParams.beishu)
  //     } else {
  //       this.maxProfit = this.getMaximunProfit(this.profitParams.prizeAmt * test[Object.keys(test)[Object.keys(test).length - 1]] * this.profitParams.amountUnit * this.profitParams.beishu)
  //     }
  //     return `${this.basicProfit} ~ ${this.maxProfit}`
  //   }
  // }

  // profitTypeB(): string {
  //   return `${this.basicProfit} ~ ${this.getMaximunProfit(this.profitParams.prizeAmt * this.profitParams.amountUnit * this.profitParams.beishu)}`
  // }
}
