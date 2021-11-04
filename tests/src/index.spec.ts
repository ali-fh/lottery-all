import LotteryLib from '../../src/index'

describe.each([
    { category: 'ssc', expected: 'ssc' },
    { category: 'l115', expected: 'l115' },
    { category: 'pk10', expected: 'pk10' },
    { category: 'k3', expected: 'k3' },
    { category: '123', expected: 'ssc' }
])('测试 LotteryLib', ({ category, expected }) => {
    test(`测试 setLottery ${category}`, () => {
        let Lottery: LotteryLib = new LotteryLib('ssc')

        Lottery.setLottery(category)
        expect(Lottery.currentLotteryType).toBe(expected)
    })
})
