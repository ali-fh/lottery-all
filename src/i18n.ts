// @ts-ignore
import cn from './assets/languages/cn.js'
// @ts-ignore
import en from './assets/languages/en.js'

export namespace I18n {
  const language: { [propName: string]: any } = {
    cn: cn,
    en: en
  }

  export let msg: { [propName: string]: any } = language.cn

  export function switchLanguage(lanCode: string) {
    msg = language[lanCode]
  }
}
