import Util from './Util'
import { ProfitParams, OptionSection } from './Interfases'
import { DaXiaoDanShuang } from './encoders/DaXiaoDanShuang'

export default class {
  private MAXIMUN: number = 400000

  getMaximunProfit(profit: number, params: ProfitParams): string {
    if (profit >= this.MAXIMUN) {
      return Util.toFixed(this.MAXIMUN * params.amountUnit - params.betAmt, 2)
    } else {
      return Util.toFixed(profit - params.betAmt, 2)
    }
  }

  profitBasic(params: ProfitParams): string {
    return this.getMaximunProfit(params.prize * params.amountUnit * params.beishu, params)
  }

  profitTypeA(params: ProfitParams, test: any): string {
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

  profitTypeB(params: ProfitParams, test: any[], limit: number, position: number): string {
    const basicProfit = Util.toFixed(params.prize * params.amountUnit * params.beishu - params.betAmt, 2)

    if (position <= limit) {
      return params.betCount === 0 ? '0' : basicProfit
    } else {
      let maxProfit: string = this.getMaximunProfit(params.prize * test[position - 1][1] * params.amountUnit * params.beishu, params)
      return `${basicProfit} ~ ${maxProfit}`
    }
  }

  public profitType11x5(this: any, data: ProfitParams, rules: any) {
    if (this.betOptions.length > 1) {
      const test = rules[this.betOptions[0].selected.length - 1]
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

  public getProfitHeZhi(params: ProfitParams, selectedArr: Array<string>): string {
    let arr: number[] = selectedArr.map((element: string) => Number(params.prize[Number(element)]))
    arr.sort(function (a, b) {
      return a - b
    })
    const basicProfit: string = Util.toFixed(arr[0] * params.amountUnit * params.beishu - params.betAmt, 2)
    if (params.betCount === 1) {
      return basicProfit
    } else {
      return `${basicProfit} ~ ${Util.toFixed(arr[arr.length - 1] * params.amountUnit * params.beishu - params.betAmt, 2)}`
    }
  }

  public getProfitGuanYaHeZhi(params: ProfitParams, selectedArr: Array<string>): string {
    let arr: number[] = selectedArr.map((element: any) => Number(params.prize[Number(DaXiaoDanShuang[element])]))
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

  public profitTypeBWrapper(options: any, data: ProfitParams) {
    let position: number = 0
    let test = [{ '1': 1 }, { '1': 2 }, { '1': 3 }, { '1': 4 }, { '1': 5 }, { '1': 6 }, { '1': 7 }, { '1': 8 }, { '1': 9 }, { '1': 10 }]
    options.forEach((element: OptionSection) => {
      if (element.selected.length) position++
    })
    return this.profitTypeB(data, test, 1, position)
  }

  profitWrapper(position: any, betOptions: any, params: ProfitParams, test: any, limit: number) {
    let pos = 0
    ;(position.length ? position : betOptions).forEach((element: any) => {
      if (position.length) {
        pos += element ? 1 : 0
      } else {
        if (element.selected.length) pos++
      }
    })

    return this.profitTypeB(params, test, limit, pos)
  }

  getProfitSSC(this: any, params: ProfitParams): string {
    if (this.betOptions.length) {
      let arr: Array<number> = this.betOptions[0].selected.flatMap((element: OptionSection) => Number(params.prize[Number(element)]))

      arr.sort(function (a, b) {
        return a - b
      })

      if (params.betCount === 1) {
        return Util.toFixed(arr[0] * params.amountUnit * params.beishu - params.betAmt, 2)
      } else {
        return `${Util.toFixed(arr[0] * params.amountUnit * params.beishu - params.betAmt, 2)} ~ ${Util.toFixed(arr[arr.length - 1] * params.amountUnit * params.beishu - params.betAmt, 2)}`
      }
    }
    return '0'
  }

  getProfitZuHe(params: ProfitParams, times: number) {
    let basicProfit = Util.toFixed(params.prize * params.amountUnit * params.beishu - params.betAmt, 2)
    let maxProfit: string = this.getMaximunProfit(params.prize * params.amountUnit * params.beishu * times, params)
    return `${basicProfit} ~ ${maxProfit}`
  }

  profitTypeE(params: ProfitParams, basicProfit: string) {
    let maxProfit: string = this.getMaximunProfit(params.prize * params.amountUnit * params.beishu, params)
    return `${basicProfit} ~ ${maxProfit}`
  }
}
