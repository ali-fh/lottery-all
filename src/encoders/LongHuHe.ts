enum LongHuHe {
  '龙',
  '虎',
  '和'
}

function encode(key: keyof typeof LongHuHe): number {
  return LongHuHe[key]
}

export { encode }
