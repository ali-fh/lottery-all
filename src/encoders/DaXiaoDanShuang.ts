enum DaXiaoDanShuang {
  '小',
  '大',
  '双',
  '单'
}

function encode(key: keyof typeof DaXiaoDanShuang): number {
  return DaXiaoDanShuang[key]
}

function decode(key: number): string {
  return DaXiaoDanShuang[key] || String(key)
}

export { encode, decode, DaXiaoDanShuang }
