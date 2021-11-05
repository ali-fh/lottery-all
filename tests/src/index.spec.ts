import LotteryLib from '../../src/index'

let Lottery: LotteryLib = new LotteryLib('k3')
console.log(Lottery.currentLotteryType)
console.log(Lottery.currentLotteryType['k3-k3-sanbutonghao'].betOptions)

describe('测试 LotteryLib', () => {
    test(`测试 setLottery`, () => {})
})
