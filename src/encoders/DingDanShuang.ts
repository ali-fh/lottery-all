enum DingDanShuang {
  '0单5双',
  '1单4双',
  '2单3双',
  '3单2双',
  '4单1双',
  '5单0双'
}

function encode(key: keyof typeof DingDanShuang): number {
  return DingDanShuang[key]
}

function decode(key: number): string {
  return DingDanShuang[key] || String(key)
}

export { encode, decode }
