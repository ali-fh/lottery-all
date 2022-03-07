import { encode as LongHuHeEncode } from '../../src/encoders/LongHuHe'
import { encode as DingDanShuangEncode } from '../../src/encoders/DingDanShuang'
import { encode as DaXiaoDanShuangEncode } from '../../src/encoders/DaXiaoDanShuang'
import { encode as BaoZiShunZiDuiZiEncode } from '../../src/encoders/BaoZiShunZiDuiZi'

describe('encoder test', () => {
  test('龙虎和', () => expect(LongHuHeEncode('龙')).toBe(0))
  test('大小单双', () => expect(DaXiaoDanShuangEncode('小')).toBe(0))
  test('定单双', () => expect(DingDanShuangEncode('4单1双')).toBe(4))
  test('豹子、顺子、对子', () => expect(BaoZiShunZiDuiZiEncode('豹子')).toBe(0))
})
