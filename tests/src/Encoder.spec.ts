import { encode as LongHuHeEncode, decode as LongHuHeDecode } from '../../src/encoders/LongHuHe'
import { encode as DingDanShuangEncode, decode as DingDanShuangDecode } from '../../src/encoders/DingDanShuang'
import { encode as DaXiaoDanShuangEncode, decode as DaXiaoDanShuangDecode } from '../../src/encoders/DaXiaoDanShuang'
import { encode as BaoZiShunZiDuiZiEncode, decode as BaoZiShunZiDuiZiDecode } from '../../src/encoders/BaoZiShunZiDuiZi'
test('龙虎和', () => {
  expect(LongHuHeEncode('龙')).toBe(0)
  expect(LongHuHeDecode(2)).toBe('和')
})
test('大小单双', () => {
  expect(DaXiaoDanShuangEncode('小')).toBe(0)
  expect(DaXiaoDanShuangDecode(2)).toBe('双')
})
test('龙虎和', () => {
  expect(DingDanShuangEncode('4单1双')).toBe(1)
  expect(DingDanShuangDecode(2)).toBe('3单2双')
})
test('豹子、顺子、对子', () => {
  expect(BaoZiShunZiDuiZiEncode('豹子')).toBe(0)
  expect(BaoZiShunZiDuiZiDecode(2)).toBe('对子')
})
