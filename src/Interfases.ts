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
