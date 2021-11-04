import BetOptionsGeneratorK3 from '../BetOptionsGeneratorK3'
export default {
    // 和值
    'k3-k3-hezhi': { betOptions: BetOptionsGeneratorK3.generatBetOptions(BetOptionsGeneratorK3.generatButtonNumbers(3, 18, true), true) },
    // 大小单双
    'k3-k3-daxiaodanshuang': { betOptions: BetOptionsGeneratorK3.generatBetOptions(['大', '小', '单', '双'], false) },
    // 三同号
    'k3-k3-santonghao': { betOptions: BetOptionsGeneratorK3.generatBetOptions(['666', '555', '444', '333', '222', '111'], false) },
    // 三不同号
    'k3-k3-sanbutonghao': { betOptions: [] },
    // 三连号
    'k3-k3-sanlianhao': { betOptions: BetOptionsGeneratorK3.generatBetOptions(['123', '234', '345', '456'], false) },
    // 二不同号
    'k3-k3-erbutonghao': { betOptions: [] },
    // 二同号
    'k3-k3-ertonghao': { betOptions: [] },
    // 单挑一骰
    'k3-k3-dantiaoyishai': { betOptions: BetOptionsGeneratorK3.generatBetOptions(['6', '5', '4', '3', '2', '1'], false) }
}
