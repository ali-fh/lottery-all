import ProfitCalculator from '../profitCalculators/Calculator'
import { ProfitParams } from '../Interfases'
import DanshiInput from 'src/DanshiInput'

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
  },
  betCount: function (num: number) {
    return num
  },
  getInput: function (input: string) {
    return DanshiInput.getInputSSC.call(this, input)
  }
}
