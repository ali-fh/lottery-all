import { List } from '../Interfases'
export default class {
    public generatBetOptions(buttonLabels: Array<string>, quickSupport: boolean = false, digitLabels: Array<string> = ['']): Array<List> {
        let data: Array<List> = []
        digitLabels.forEach((label: string) =>
            data.push({
                label: label,
                options: buttonLabels,
                selected: [],
                quickSupport: quickSupport ? buttonLabels.length > 6 : false
            })
        )
        return data
    }

    public generatButtonNumbers(from: number, to: number, twoDigit: boolean): Array<string> {
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
}
