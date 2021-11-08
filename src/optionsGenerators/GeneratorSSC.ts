import Generator from './Generator'

export default class extends Generator {
  public generatBetOptionsSSC(titles?: Array<string>) {
    if (titles) {
      return super.generatBetOptions(super.generatButtonNumbers(0, 9, true), true, titles)
    } else {
      return super.generatBetOptions(super.generatButtonNumbers(0, 9, true), true)
    }
  }
}
