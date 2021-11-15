export default class {
  public static getAllPailieZuHeBuTongHao(data: any, len: number, numArr: any, prefix: string | number, isRepeat: boolean = false) {
    for (var i = 0; i < data.length; i++) {
      if (len === 1) {
        numArr.push(prefix + data[i])
      } else {
        var newData = data.concat()
        if (!isRepeat) newData.splice(0, i + 1)
        this.getAllPailieZuHeBuTongHao(newData, len - 1, numArr, prefix + data[i], isRepeat)
      }
    }
  }
}
