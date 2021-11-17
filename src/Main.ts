import ruleBasic from './rules/RuleBasic'
import ruleK3 from './rules/RuleK3'
import rulePK10 from './rules/RulePK10'
import rule11x5 from './rules/Rule11x5'
import ruleSSC from './rules/RuleSSC'

import { cloneDeep } from 'lodash'
import { OptionSection, ProfitParams } from './Interfases'

enum LOTTOERY_TYPE {
  时时彩 = 'ssc', // 时时彩
  快三 = 'k3', // 快三
  PK10 = 'pk10',
  十一选五 = 'l115'
}
export default class {
  public currentLotteryType: any = ''
  public currentRule: { [propName: string]: any } = {}
  private categoryName: string = ''

  constructor(category: string) {
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
    let isExist = selectedData.some((element: string) => element == num)
    if (isExist) {
      // 当所选号码已经被选取的情况下
      selectedData = selectedData.filter((element: string) => element != num)
    } else {
      // 当所选号码尚未被选取的情况下
      if (this.currentRule.limit === 1) {
        selectedData = [num]
      } else {
        if (this.currentRule.selectdeLimitFormatter) {
          // 胆码托码
          this.currentRule.selectdeLimitFormatter(num, index)
        } else {
          // 一般选号
          selectedData.push(String(num))
        }
      }
    }
    var data = Object.assign({}, this.currentRule.betOptions[index], { selected: selectedData })
    this.currentRule.betOptions.splice(index, 1, data)
  }

  /**
   * 快速选号
   *
   * @param {string} play 全、大、小、奇、偶、清
   * @param {number} index
   * @memberof Lottery
   */
  quickSelectBall(play: string, index: number) {
    let options: Array<string> = this.currentRule.betOptions[index].options
    var obj: { [propName: string]: Array<string> } = {
      全: options,
      大: options.slice(options.length / 2),
      小: options.slice(0, options.length / 2),
      奇: (function () {
        var arr: any = []
        options.forEach((element: string) => {
          if (Number(element) % 2 !== 0) {
            arr.push(element)
          }
        })
        return arr
      })(),
      偶: (function () {
        var arr: any = []
        options.forEach((element: string) => {
          if (Number(element) % 2 === 0) {
            arr.push(element)
          }
        })
        return arr
      })(),
      清: []
    }
    var data = Object.assign({}, this.currentRule.betOptions[index], { selected: obj[play] })
    this.currentRule.betOptions.splice(index, 1, data)
  }

  /**
   * 切换玩法
   *
   * @param {string} ruleName 玩法名称
   * @memberof Lottery
   */
  switchRule(ruleName: string) {
    const RULE = require('./assets/rule.json')
    const PLACEHOLDER = require('./assets/placeholder.json')
    this.currentRule = Object.assign(cloneDeep(ruleBasic), cloneDeep(this.currentLotteryType[ruleName]))
    if (!this.currentRule.betOptions.length) {
      this.currentRule.rule = RULE[this.categoryName][ruleName]
      this.currentRule.placeholder = PLACEHOLDER[this.categoryName][ruleName]
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
    return rule.betOptions.length === 0 ? rule.positionbetCount(num, rule.position) : num
  }

  betFilter(betNumInput: string = '') {
    if (!betNumInput) return
    return this.currentRule.getInput(betNumInput).join('|')
  }

  getProfit(data: ProfitParams) {
    return this.currentRule.getProfit(data)
  }

  format(input?: string) {
    let rule: any = this.currentRule
    if (rule.betOptions.length) {
      return rule.betOptions.map((position: any) => position.selected.map((item: any) => rule.encode(item)).join(','))
    } else {
      return ''
    }
  }
}
