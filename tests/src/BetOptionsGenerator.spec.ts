import BetOptionsGenerator from '../../src/BetOptionsGenerator'
import { List } from '../../src/Interfases'

describe('测试 generatListChildren', () => {
    const options = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
    let result: Array<List> = []
    it('生成双位数号码', () => {
        result = BetOptionsGenerator.generatBetOptions(options, true)
        expect(result[0].label).toBe('')
        expect(result[0].quickSupport).toBe(true)
        expect(result.length).toBe(1)
    })

    it('生成单位数号码', () => {
        result = BetOptionsGenerator.generatBetOptions(options, false, ['万位', '千位'])
        expect(result[0].label).toBe('万位')
        expect(result[0].quickSupport).toBe(false)
        expect(result.length).toBe(2)
    })
})

describe('测试 generatListChildren', () => {
    it('生成双位数号码', () => {
        let result: string[] = BetOptionsGenerator.generatButtonNumbers(1, 10, true)
        expect(result).toEqual(expect.arrayContaining(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']))
    })

    it('生成单位数号码', () => {
        let result: string[] = BetOptionsGenerator.generatButtonNumbers(1, 10, false)
        expect(result).toEqual(expect.arrayContaining(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']))
    })
})
