enum BaoZiShunZiDuiZi {
  '豹子',
  '顺子',
  '对子'
}

function encode(key: keyof typeof BaoZiShunZiDuiZi): number {
  return BaoZiShunZiDuiZi[key]
}

function decode(key: number): string {
  return BaoZiShunZiDuiZi[key] || String(key)
}

export { encode, decode }
