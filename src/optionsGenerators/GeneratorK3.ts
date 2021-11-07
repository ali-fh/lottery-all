import Generator from './Generator'

export default class extends Generator {
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

  public getAllPailieZuHeBuTongHaoWrapper(num: number): Array<string> {
    const CONBITATION_SOURCE: number[] = [1, 2, 3, 4, 5, 6]

    let data: Array<string> = []
    this.getAllPailieZuHeBuTongHao(CONBITATION_SOURCE, num, data, '', false)
    return data
  }
}
