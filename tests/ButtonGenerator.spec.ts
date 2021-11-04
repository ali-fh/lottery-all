import { generatListChildren } from '../src/ButtonGenerator'

describe('测试 generatListChildren', () => {
    it('生成双位数号码', () => {
        let result: string[] = generatListChildren(1, 10, true)
        expect(result).toEqual(expect.arrayContaining(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']))
    })

    it('生成单位数号码', () => {
        let result: string[] = generatListChildren(1, 10, false)
        expect(result).toEqual(expect.arrayContaining(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']))
    })
})
