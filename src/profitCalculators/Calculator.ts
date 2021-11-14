import Util from '../Util'
import { ProfitParams, Test } from '../Interfases'

export default class {
  // private basicProfit: string = ''
  // private maxProfit: string = ''
  // private profitParams: ProfitParams
  private MAXIMUN: number = 400000

  // constructor(params: ProfitParams) {
  //   this.profitParams = params
  //   this.basicProfit = Util.toFixed(params.prize * params.amountUnit * params.beishu - params.betAmt, 2)
  // }

  getMaximunProfit(profit: number, params: ProfitParams): string {
    if (profit >= this.MAXIMUN) {
      return Util.toFixed(this.MAXIMUN * params.amountUnit - params.betAmt, 2)
    } else {
      return Util.toFixed(profit - params.betAmt, 2)
    }
  }

  profitBasic(params: ProfitParams): string {
    const profit: number = params.prize * params.amountUnit * params.beishu
    return this.getMaximunProfit(profit, params)
  }

  profitTypeA(params: ProfitParams, test: Test): string {
    const basicProfit = Util.toFixed(params.prize * params.amountUnit * params.beishu - params.betAmt, 2)

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

  profitTypeC(params: ProfitParams, test: Test[], limit: number, position: number): string {
    const basicProfit = Util.toFixed(params.prize * params.amountUnit * params.beishu - params.betAmt, 2)

    if (position <= limit) {
      return params.betCount === 0 ? '0' : basicProfit
    } else {
      let maxProfit: string = this.getMaximunProfit(params.prize * test[position - 1][1] * params.amountUnit * params.beishu, params)
      return `${basicProfit} ~ ${maxProfit}`
    }
  }
}
