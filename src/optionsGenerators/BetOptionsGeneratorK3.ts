import BetOptionsGenerator from './BetOptionsGenerator'

const CONBITATION_SOURCE: number[] = [1, 2, 3, 4, 5, 6]

export default class extends BetOptionsGenerator {
  public generatButtonNumbersErTongHao(): Array<string> {
    let data = Array<string>()
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 6; j++) {
        if (j !== i) {
          data.push(i < j ? '' + i + i + j : '' + j + i + i)
        }
      }
    }
    return data
  }

  public getAllPailieZuHeErBuTongHao(): Array<string> {
    let data: Array<string> = []
    super.getAllPailieZuHeBuTongHao(CONBITATION_SOURCE, 2, data, '', false)
    return data
  }

  public getAllPailieZuHeSanBuTongHao(): Array<string> {
    let data: Array<string> = []
    super.getAllPailieZuHeBuTongHao(CONBITATION_SOURCE, 3, data, '', false)
    return data
  }
}
