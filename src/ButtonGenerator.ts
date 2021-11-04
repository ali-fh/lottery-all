// interface List {
//     // 标题
//     label: string
//     // 投注选项
//     children: string[]
//     // 被选中的的值
//     selected: string[]
//     // 支援快速选号
//     quick: boolean
// }

// export function generatListWrapper(labelArr: string[], listArray: string[], quick: boolean = true): Array<List> {
//     var data: List[] = []
//     labelArr.forEach((label: string) => data.push())
//     return data
// }

export function generatListChildren(from: number, to: number, twoDigit: boolean): Array<string> {
    var arr = Array<string>()
    for (var i = from; i <= to; i++) {
        if (twoDigit) {
            var str = ('0' + i).slice(-2)
            arr.push(str)
        } else {
            arr.push(String(i))
        }
    }
    return arr
}
