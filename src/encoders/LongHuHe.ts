enum LongHuHe {
  '龙',
  '虎',
  '和'
}

function encode(key: keyof typeof LongHuHe): number {
  return LongHuHe[key]
}

function decode(key: number): string {
  return LongHuHe[key] || String(key)
}

export { encode, decode }
