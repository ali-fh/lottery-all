import BetOptionsGeneratorPK10 from '../../../src/optionsGenerators/GeneratorPK10'
import { OptionSection } from '../../../src/Interfases'

const betOptionsGeneratorPK10 = new BetOptionsGeneratorPK10()
const TITLE_LABEL_ARRAY: string[] = ['冠军', '亚军', '第三', '第四', '第五', '第六', '第七', '第八', '第九', '第十']

describe('测试 generatButtonNumbersErTongHao', () => {
  it('生成2同号数组', () => {
    const result: Array<OptionSection> = betOptionsGeneratorPK10.getDragonWithTiger(TITLE_LABEL_ARRAY)
    console.log(result)
    // expect(result).toEqual(expect.arrayContaining(expectArray))
  })
})
