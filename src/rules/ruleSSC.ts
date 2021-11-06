import BetOptionsGenerator from '../optionsGenerators/Generator'

const OptionsGenerator = new BetOptionsGenerator()

const DIGIT_ARRAY = ['万位', '千位', '百位', '十位', '个位']

export default {
  'yixing-dingweidan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY)
  },
  'wuxing-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY)
  },
  'sixing-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY.slice(1))
  },
  'qiansan-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY.slice(2))
  },
  'zhongsan-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY.slice(1, 4))
  },
  'housan-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY.slice(2))
  },
  'erxing-zhixuan-houerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY.slice(3))
  },
  'erxing-zhixuan-qianerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY.slice(0, 2))
  },
  'renxuan-renxuan2-zhixuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY)
  },
  'renxuan-renxuan3-zhixuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY)
  },
  'renxuan-renxuan4-zhixuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, true), true, DIGIT_ARRAY)
  },
  'renxuan-renxuan2-zhixuandanshi': {},
  'renxuan-renxuan3-zhixuandanshi': {},
  'renxuan-renxuan4-zhixuandanshi': {},
  'renxuan-renxuan2-zuxuandanshi': {},
  'renxuan-renxuan3-zusandanshi': {},
  'renxuan-renxuan3-zuliudanshi': {},
  'renxuan-renxuan3-hunhezuxuan': {},
  'renxuan-renxuan2-zhixuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 18, true), true)
  },
  'renxuan-renxuan3-zhixuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 27, true), true)
  },
  'renxuan-renxuan2-zuxuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 17, true), true)
  },
  'renxuan-renxuan3-zuxuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 26, true), true)
  },
  'renxuan-renxuan2-zuxuanfushi': {},
  'renxuan-renxuan3-zusanfushi': {},
  'renxuan-renxuan4-zuxuan24': {},
  'renxuan-renxuan4-zuxuan12': {},
  'renxuan-renxuan4-zuxuan6': {},
  'renxuan-renxuan4-zuxuan4': {},
  'renxuan-renxuan3-zuliufushi': {},
  'hezhi-wuxing-hezhi': {},
  'wuxing-zhixuan-danshi': {},
  'sixing-zhixuan-danshi': {},
  'qiansan-zhixuan-danshi': {},
  'housan-zhixuan-danshi': {},
  'erxing-zhixuan-houerdanshi': {},
  'erxing-zhixuan-qianerdanshi': {},
  'qiansan-zuxuan-zusandanshi': {},
  'zhongsan-zuxuan-zusandanshi': {},
  'housan-zuxuan-zusandanshi': {},
  'qiansan-zuxuan-zuliudanshi': {},
  'zhongsan-zuxuan-zuliudanshi': {},
  'housan-zuxuan-zuliudanshi': {},
  'erxing-zuxuan-houerdanshi': {},
  'erxing-zuxuan-qianerdanshi': {},
  'qiansan-zuxuan-hunhezuxuan': {},
  'zhongsan-zuxuan-hunhezuxuan': {},
  'housan-zuxuan-hunhezuxuan': {},
  'zhongsan-zhixuan-danshi': {},
  'wuxing-zhixuan-zuhe': {},
  'sixing-zhixuan-zuhe': {},
  'qiansan-zhixuan-zuhe': {},
  'zhongsan-zhixuan-zuhe': {},
  'housan-zhixuan-zuhe': {},
  'wuxing-zuxuan-zuxuan120': {},
  'sixing-zuxuan-zuxuan24': {},
  'erxing-zuxuan-houerfushi': {},
  'erxing-zuxuan-qianerfushi': {},
  'budingwei-sanxingbudingwei-housanermabudingwei': {},
  'budingwei-sanxingbudingwei-qiansanermabudingwei': {},
  'budingwei-sanxingbudingwei-zhongsanermabudingwei': {},
  'budingwei-sixingbudingwei-sixingermabudingwei': {},
  'budingwei-wuxingbudingwei-wuxingermabudingwei': {},
  'budingwei-wuxingbudingwei-wuxingsanmabudingwei': {},
  'wuxing-zuxuan-zuxuan60': {},
  'sixing-zuxuan-zuxuan12': {},
  'wuxing-zuxuan-zuxuan30': {},
  'wuxing-zuxuan-zuxuan20': {},
  'sixing-zuxuan-zuxuan4': {},
  'wuxing-zuxuan-zuxuan10': {},
  'wuxing-zuxuan-zuxuan5': {},
  'sixing-zuxuan-zuxuan6': {},
  'qiansan-zuxuan-zusan': {},
  'zhongsan-zuxuan-zusan': {},
  'housan-zuxuan-zusan': {},
  'qiansan-zuxuan-zuliu': {},
  'zhongsan-zuxuan-zuliu': {},
  'housan-zuxuan-zuliu': {},
  'qiansan-zhixuan-hezhi': {},
  'zhongsan-zhixuan-hezhi': {},
  'housan-zhixuan-hezhi': {},
  'erxing-zhixuan-houerhezhi': {},
  'erxing-zhixuan-qianerhezhi': {},
  'qiansan-zuxuan-hezhi': {},
  'zhongsan-zuxuan-hezhi': {},
  'housan-zuxuan-hezhi': {},
  'erxing-zuxuan-houerhezhi': {},
  'erxing-zuxuan-qianerhezhi': {},
  'qiansan-zhixuan-kuadu': {},
  'zhongsan-zhixuan-kuadu': {},
  'housan-zhixuan-kuadu': {},
  'erxing-zhixuan-houerkuadu': {},
  'erxing-zhixuan-qianerkuadu': {},
  'quwei-teshu-yifanfengshun': {},
  'quwei-teshu-haoshichengshuang': {},
  'quwei-teshu-sanxingbaoxi': {},
  'quwei-teshu-sijifacai': {},
  'budingwei-sanxingbudingwei-housanyimabudingwei': {},
  'budingwei-sanxingbudingwei-qiansanyimabudingwei': {},
  'budingwei-sanxingbudingwei-zhongsanyimabudingwei': {},
  'budingwei-sixingbudingwei-sixingyimabudingwei': {},
  'qiansan-zuxuan-baodan': {},
  'zhongsan-zuxuan-baodan': {},
  'housan-zuxuan-baodan': {},
  'erxing-zuxuan-houerbaodan': {},
  'erxing-zuxuan-qianerbaodan': {},
  'qiansan-qita-hezhiweishu': {},
  'zhongsan-qita-hezhiweishu': {},
  'housan-qita-hezhiweishu': {},
  'qiansan-qita-teshuhaoma': {},
  'zhongsan-qita-teshuhaoma': {},
  'housan-qita-teshuhaoma': {},
  'hezhi-wuxing-bsde': {},
  'daxiaodanshuang-daxiaodanshuang-houerdaxiaodanshuang': {},
  'daxiaodanshuang-daxiaodanshuang-housandaxiaodanshuang': {},
  'daxiaodanshuang-daxiaodanshuang-qianerdaxiaodanshuang': {},
  'daxiaodanshuang-daxiaodanshuang-qiansandaxiaodanshuang': {},
  'daxiaodanshuang-daxiaodanshuang-zhongsandaxiaodanshuang': {},
  'quwei-quwei-wumaquweisanxing': {},
  'quwei-quwei-simaquweisanxing': {},
  'quwei-quwei-housanquweierxing': {},
  'quwei-quwei-qiansanquweierxing': {},
  'quwei-quwei-zhongsanquweierxing': {},
  'quwei-qujian-wumaqujiansanxing': {},
  'quwei-qujian-simaqujiansanxing': {},
  'quwei-qujian-housanqujianerxing': {},
  'quwei-qujian-qiansanqujianerxing': {},
  'quwei-qujian-zhongsanqujianerxing': {},
  'longhu-longhuhe-wanqian': {},
  'longhu-longhuhe-wanbai': {},
  'longhu-longhuhe-wanshi': {},
  'longhu-longhuhe-wange': {},
  'longhu-longhuhe-qianbai': {},
  'longhu-longhuhe-qianshi': {},
  'longhu-longhuhe-qiange': {},
  'longhu-longhuhe-baishi': {},
  'longhu-longhuhe-baige': {},
  'longhu-longhuhe-shige': {}
}
