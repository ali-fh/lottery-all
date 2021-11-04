enum LOTTOERY_TYPE {
    时时彩 = 'ssc', // 时时彩
    快三 = 'k3', // 快三
    PK10 = 'pk10',
    十一选五 = 'l115'
}
export default class LotteryLib {
    public currentLotteryType = ''

    constructor(category: string) {
        this.setLottery(category)

        // BetOptionsGenerator.createBetOptions(['6', '5', '4', '3', '2', '1'])
    }

    public setLottery(category: string) {
        switch (category) {
            case LOTTOERY_TYPE.快三:
                this.currentLotteryType = LOTTOERY_TYPE.快三
                break
            case LOTTOERY_TYPE.PK10:
                this.currentLotteryType = LOTTOERY_TYPE.PK10
                break
            case LOTTOERY_TYPE.十一选五:
                this.currentLotteryType = LOTTOERY_TYPE.十一选五
                break
            default:
                this.currentLotteryType = LOTTOERY_TYPE.时时彩
        }
    }
}
