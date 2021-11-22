import ProfitCalculator from '../Calculator'
import { ProfitParams } from '../Interfases'
import InputFilter from '../InputFilter'

export default {
  betOptions: [],
  getProfit: (data: ProfitParams) => new ProfitCalculator().profitBasic(data),
  encode: (key: string) => key,
  decode: (key: string) => key,
  betCount: (num: number) => num,
  getInput: function (input: string) {
    return new InputFilter().stringFilterSSC.call(this, input)
  },
  positionbetCount: (num: number): number => num
}
