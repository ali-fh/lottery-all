export namespace I18n {
  const language: { [propName: string]: any } = {
    cn: require('./assets/languages/cn.json'),
    en: require('./assets/languages/en.json')
  }

  export let msg: { [propName: string]: any } = language.cn

  export function switchLanguage(lanCode: string) {
    msg = language[lanCode]
  }
}
