import Util from '../Util'
import { ProfitParams } from '../Interfases'
import Calculator from './Calculator'

export default class extends Calculator {
  public profitType11x5(this: any, data: ProfitParams, rules: any) {
    if (this.list.length > 1) {
      const test = rules[this.list[0].selected.length - 1]
      const basicProfit: string = Util.toFixed(data.prize * data.amountUnit * data.beishu - data.betAmt, 2)
      if (data.betCount) {
        if (test[data.betCount] === 1) {
          return basicProfit
        } else {
          return `${basicProfit} ~ ${Util.toFixed(data.prize * test[data.betCount] * data.amountUnit * data.beishu - data.betAmt, 2)}`
        }
      }
    }
  }
}
