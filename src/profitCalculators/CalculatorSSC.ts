import Util from '../Util'
import { OptionSection, ProfitParams } from '../Interfases'
import Calculator from './Calculator'

export default class extends Calculator {
  profitWrapper(this: any, params: ProfitParams, test: any, limit: number) {
    let pos = 0
    const arr = this.position ? this.position : this.list

    arr.forEach((element: any) => {
      if (this.position) {
        pos += element
      } else {
        if (element.selected.length) pos++
      }
    })

    return super.profitTypeB.call(this, params, test, limit, pos)
  }

  getProfitSSC(this: any, params: ProfitParams) {
    if (this.list.length) {
      let arr: Array<number> = this.list[0].selected.forEach((element: OptionSection) => Number(params.prize[Number(element)]))
      arr.sort(function (a, b) {
        return a - b
      })
      if (params.betCount === 1) {
        return Util.toFixed(arr[0] * params.amountUnit * params.beishu - params.betAmt, 2)
      } else {
        return `${Util.toFixed(arr[0] * params.amountUnit * params.beishu - params.betAmt, 2)} ~ ${Util.toFixed(arr[arr.length - 1] * params.amountUnit * params.beishu - params.betAmt, 2)}`
      }
    }
  }

  getProfitZuHe(this: any, params: ProfitParams, times: number) {
    let basicProfit = Util.toFixed(params.prize * params.amountUnit * params.beishu - params.betAmt, 2)
    let maxProfit: string = super.getMaximunProfit(params.prize * params.amountUnit * params.beishu * times, params)
    return `${basicProfit} ~ ${maxProfit}`
  }

  profitTypeE(params: ProfitParams, basicProfit: string) {
    let maxProfit: string = super.getMaximunProfit(params.prize * params.amountUnit * params.beishu, params)
    return `${basicProfit} ~ ${maxProfit}`
  }
}
