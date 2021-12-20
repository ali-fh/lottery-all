import ruleBasic from './rules/RuleBasic'
import ruleK3 from './rules/RuleK3'
import rulePK10 from './rules/RulePK10'
import rule11x5 from './rules/Rule11x5'
import ruleSSC from './rules/RuleSSC'
import { I18n } from './i18n'

import { cloneDeep } from 'lodash'
import { OptionSection, ProfitParams } from './Interfases'

enum LOTTOERY_TYPE {
  时时彩 = 'ssc',
  快三 = 'k3',
  PK10 = 'pk10',
  十一选五 = 'l115'
}
export default class {
  public currentLotteryType: any = ''
  public currentRule: { [propName: string]: any } = {}
  private categoryName: string = ''

  constructor(category: string, language: string) {
    I18n.switchLanguage(language)
    this.categoryName = category
    switch (category) {
      case LOTTOERY_TYPE.快三:
        this.currentLotteryType = ruleK3
        break
      case LOTTOERY_TYPE.PK10:
        this.currentLotteryType = rulePK10
        break
      case LOTTOERY_TYPE.十一选五:
        this.currentLotteryType = rule11x5
        break
      default:
        this.currentLotteryType = ruleSSC
    }
  }

  /**
   * 选号
   *
   * @param {string} num 号码
   * @param {number} index
   * @memberof Lottery
   */
  selectedBall(num: string, index: number = 0) {
    let selectedData: Array<string> = this.currentRule.betOptions[index].selected
    if (selectedData.some((element: string) => element == num)) {
      // 当所选号码已经被选取的情况下
      selectedData = selectedData.filter((element: string) => element != num)
    } else {
      // 当所选号码尚未被选取的情况下
      if (this.currentRule.limit === 1) {
        // 只能单选
        selectedData = [num]
      } else {
        if (this.currentRule.selectdeLimitFormatter) {
          // 胆码托码
          this.currentRule.selectdeLimitFormatter(num, index)
        } else {
          // 一般选号
          selectedData.push(num)
        }
      }
    }
    this.currentRule.betOptions.splice(index, 1, Object.assign({}, this.currentRule.betOptions[index], { selected: selectedData }))
  }

  /**
   * 快速选号
   *
   * @param {string} play 全、大、小、奇、偶、清
   * @param {number} index
   * @memberof Lottery
   */
  quickSelectBall(play: string, index: number = 0) {
    const options: Array<string> = this.currentRule.betOptions[index].options
    const obj: { [propName: string]: Array<string> } = {
      [I18n.msg['options']['All']]: options,
      [I18n.msg['options']['Big']]: options.slice(options.length / 2),
      [I18n.msg['options']['Small']]: options.slice(0, options.length / 2),
      [I18n.msg['options']['Odd']]: options.filter((element: string) => Number(element) % 2 !== 0),
      [I18n.msg['options']['Even']]: options.filter((element: string) => Number(element) % 2 === 0),
      [I18n.msg['options']['Clear']]: []
    }
    this.currentRule.betOptions.splice(index, 1, Object.assign({}, this.currentRule.betOptions[index], { selected: obj[play] }))
  }

  /**
   * 切换玩法
   *
   * @param {string} ruleName 玩法名称
   * @memberof Lottery
   */
  async switchRule(ruleName: string) {
    this.currentRule = Object.assign({}, cloneDeep(ruleBasic), cloneDeep(this.currentLotteryType[ruleName]))
    if (!this.currentRule.betOptions.length) {
      this.currentRule.rule = I18n.msg['rule'][this.categoryName][ruleName]
      this.currentRule.placeholder = I18n.msg['placeholder'][this.categoryName][ruleName]
    }
  }

  /**
   * 计算玩家投注注数
   *
   * @param {string} [betNumInput=''] 若单式玩法需传入玩家投注的字串
   * @return {*}  {number} 注数
   * @memberof Lottery
   */
  getBetCount(betNumInput: string = ''): number {
    let rule: any = this.currentRule
    let num: number = 0

    if (rule.betOptions.length === 0) {
      // 单式玩法
      num = rule.getInput(betNumInput).length
    } else {
      // 非单式玩法
      num = rule.betCount(rule.betOptions.reduce((sum: number, item: OptionSection) => sum * item.selected.length, 1))
    }
    return rule.position && rule.position.length === 0 ? num : rule.positionBetCount(num, rule.position)
  }

  togglePosition(index: number) {
    const rule: any = this.currentRule
    const temp: boolean[] = cloneDeep(rule.position)
    temp[index] = !temp[index]
    rule.position = temp.filter((element) => element).length < rule.positionLimit ? rule.position : temp
  }

  betFilter(betNumInput: string = '') {
    if (!betNumInput) return
    return this.currentRule.getInput(betNumInput)
  }

  getProfit(data: ProfitParams) {
    return this.currentRule.getProfit(data)
  }

  format(input?: string): string {
    let rule: any = this.currentRule
    if (rule.betOptions.length) {
      if (rule.isSingleNum) {
        return rule.betOptions[0].selected
      } else {
        return rule.betOptions.map((position: any) => position.selected.map((item: any) => rule.encode(item)).join(','))
      }
    } else {
      return this.betFilter(input).map((element: string) =>
        element
          .split(' ')
          .map((num: string) => rule.encode(num))
          .join(',')
      )
    }
  }
}
