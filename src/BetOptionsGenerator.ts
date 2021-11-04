interface List {
    // 标题
    label: string
    // 投注选项
    options: string[]
    // 被选中的的值
    selected: string[]
    // 支援快速选号
    quickSupport: boolean
}

export default class {
    public static createBetOptions(buttonLabels: Array<string>, quickSupport: boolean = false, digitLabels?: Array<string>): Array<List> {
        let data: Array<List> = []

        if (digitLabels) {
            digitLabels.forEach((label: string) => data.push(this.generatList(buttonLabels, quickSupport, label)))
        } else {
            data.push(this.generatList(buttonLabels, quickSupport))
        }

        return data
    }

    private static generatList(_options: Array<string>, _quickSupport: boolean, lableName?: string): List {
        return {
            label: lableName ? lableName : '',
            options: _options,
            selected: [],
            quickSupport: _quickSupport ? _options.length > 6 : false
        }
    }
}
