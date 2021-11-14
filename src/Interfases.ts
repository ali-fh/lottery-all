export interface OptionSection {
  // 标题
  label: string
  // 投注选项
  options: string[]
  // 被选中的的值
  selected: string[]
  // 支援快速选号
  quickSupport: boolean
}

export interface ProfitParams {
  // 单注奖金金额
  prize: any
  // 金额单位
  amountUnit: number
  // 下注倍数
  beishu: number
  // 下注金额
  betAmt: number

  betCount?: number
}

export interface Test {
  [propName: string]: number
}
