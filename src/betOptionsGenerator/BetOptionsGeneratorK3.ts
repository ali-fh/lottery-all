import BetOptionsGenerator from './BetOptionsGenerator'
// import { Combination } from 'js-combinatorics'

export default class extends BetOptionsGenerator {
    public generatButtonNumbersErTongHao(): Array<string> {
        let arr = Array<string>()
        for (let i = 1; i <= 6; i++) {
            for (let j = 1; j <= 6; j++) {
                if (j !== i) {
                    arr.push(i < j ? '' + i + i + j : '' + j + i + i)
                }
            }
        }
        return arr
    }

    public getAllPailieZuheBuTongHao(data: any, len: number, numArr: any, prefix: string | number, isRepeat: boolean = false) {
        for (var i = 0; i < data.length; i++) {
            if (len === 1) {
                numArr.push(prefix + data[i])
            } else {
                var newData = data.concat()
                if (!isRepeat) newData.splice(0, i + 1)
                console.log(newData)
                this.getAllPailieZuheBuTongHao(newData, len - 1, numArr, prefix + data[i], isRepeat)
            }
        }
    }

    // public test(): Array<string> {
    //     const aa = new Combination('123456', 3)
    //     console.log(aa)
    //     return ['1', '1', '1', '1', '1', '1', '1', '1']
    // }
}
