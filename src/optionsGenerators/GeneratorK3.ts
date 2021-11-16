import Generator from './Generator'

export default class extends Generator {
  public generatButtonNumbersErTongHao(): Array<string> {
    let data: Array<string> = []
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 6; j++) {
        if (j !== i) {
          data.push(i < j ? '' + i + i + j : '' + j + i + i)
        }
      }
    }
    return data
  }
}
