enum DaXiaoDanShuang {
  '小',
  '大',
  '双',
  '单'
}

function encode(key: keyof typeof DaXiaoDanShuang): number {
  return DaXiaoDanShuang[key]
}

export { encode, DaXiaoDanShuang }
