import Generator from './Generator'

export default class extends Generator {
  public generatBetOptions11x5(titles?: Array<string>) {
    if (titles) {
      super.generatBetOptions(super.generatButtonNumbers(1, 11, true), true, titles)
    } else {
      super.generatBetOptions(super.generatButtonNumbers(1, 11, true), true)
    }
  }
}
