import BetOptionsGeneratorK3 from '../../../src/optionsGenerators/BetOptionsGeneratorK3'

const betOptionsGeneratorK3 = new BetOptionsGeneratorK3()

describe('测试 generatButtonNumbersErTongHao', () => {
  it('生成2同号数组', () => {
    const expectArray = [
      '112',
      '113',
      '114',
      '115',
      '116',
      '122',
      '223',
      '224',
      '225',
      '226',
      '133',
      '233',
      '334',
      '335',
      '336',
      '144',
      '244',
      '344',
      '445',
      '446',
      '155',
      '255',
      '355',
      '455',
      '556',
      '166',
      '266',
      '366',
      '466',
      '566'
    ]
    const result: Array<string> = betOptionsGeneratorK3.generatButtonNumbersErTongHao()
    expect(result).toEqual(expect.arrayContaining(expectArray))
  })
})

// it('生成2同号数组', () => {
//   var numArr: string[] = []
//   betOptionsGeneratorK3.getAllPailieZuHeSanBuTongHao()
// })
