# lottery-logic 彩票下注逻辑库

就是一个共用库

安装
------
    npm install git+https://github.com/cy-yen/lottery-logic.git[#版本号]
    
初始化
------
    import lottery from "lottery-logic"
    
    // 彩种代号 时时彩＝ssc, PK10＝pk10, 11选5＝l115, 快3＝k3
    // 语系 cn=中文, en=英文
    const lottery = new lottery("彩种代号","语系","密钥")
方法
------
+ `switchRule(ruleName: string)` 切换玩法
    + `ruleName` 玩法代号
+ `selectedBall(num: string, index: number = 0)` 下注选号
    + `num` 传入画面中所显示的投注选项字符串
    + `index` 当前选号是第几位数字的下标 ex:重庆时时彩-五星-直选单式 万位＝0,千位＝1 依此类推...。预设值为0
+ `quickSelectBall(play: string, index: number)` 快速选号
    + `play` 传入「全、大、小、奇、偶、清」
    + `index` 当前选号是第几位数字的下标 ex:重庆时时彩-五星-直选单式 万位＝0,千位＝1 依此类推...。预设值为0
+ `getBetCount(betNumInput: string = '')` 取得玩家当前下注注数
    + `betNumInput` 单式下注内容，若当前玩法为复式玩法则不传
+ `getProfit(data: ProfitParams)` 取得玩家预期获利
    + `data` 传入内容请符合ProfitParams格式
    + ProfitParams
