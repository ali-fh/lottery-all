enum DingDanShuang {
  '5单0双',
  '4单1双',
  '3单2双',
  '2单3双',
  '1单4双',
  '0单5双'
}

function encode(key: keyof typeof DingDanShuang): number {
  return DingDanShuang[key]
}

function decode(key: number): string {
  return DingDanShuang[key] || String(key)
}

export { encode, decode }
