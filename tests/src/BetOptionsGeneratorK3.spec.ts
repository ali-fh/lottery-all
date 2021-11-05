import BetOptionsGeneratorK3 from '../../src/BetOptionsGenerator/BetOptionsGeneratorK3'

const betOptionsGeneratorK3 = new BetOptionsGeneratorK3()

describe('测试 generatButtonNumbersErTongHao', () => {
    it('生成2同号数组', () => {
        // betOptionsGeneratorK3.generatButtonNumbersErTongHao()
        // expect(result).toEqual(expect.arrayContaining(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']))
    })

    it('生成2同号数组', () => {
        var numArr: string[] = []
        betOptionsGeneratorK3.getAllPailieZuheBuTongHao(['1', '2', '3', '4', '5', '6'], 2, numArr, '', true)
        // const result: string[] = betOptionsGeneratorK3.getAllPailieZuheBuTongHao()
        console.log(numArr)
        // expect(result).toEqual(expect.arrayContaining(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']))
    })
})
