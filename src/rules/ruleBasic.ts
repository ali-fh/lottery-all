import ProfitCalculator from '../Calculator'
import { ProfitParams } from '../Interfases'
import DanshiInput from '..//DanshiInput'

export default {
  betOptions: [],
  getProfit: (data: ProfitParams) => new ProfitCalculator().profitBasic(data),
  encode: (key: string) => key,
  decode: (key: string) => key,
  betCount: (num: number) => num,
  getInput: function (input: string) {
    return new DanshiInput().getInputSSC.call(this, input)
  }
}
