import cn from './assets/languages/cn.json'
import en from './assets/languages/en.json'

export class I18n {
  static language: { [propName: string]: any } = { cn, en }
  static current: string = 'cn'

  static switchLanguage(lanCode: string) {
    // I18n.current = lanCode
    I18n.current = { ...I18n.language[lanCode] }
  }

  static getText(path: string) {
    let result: any = I18n.language[I18n.current]
    path.split('.').forEach((element) => (result = result[element]))
    return result
  }
}
