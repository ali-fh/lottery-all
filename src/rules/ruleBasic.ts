import ProfitCalculator from '../ProfitCalculator'
import { ProfitParams } from '../Interfases'

export default {
  betOptions: [],
  getProfit: (data: ProfitParams) => {
    return new ProfitCalculator().profitBasic(data)
  },
  encode: function (key: string) {
    return key
  },
  decode: function (key: number) {
    return key
  }
}
