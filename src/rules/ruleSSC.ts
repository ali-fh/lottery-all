import BetOptionsGenerator from '../optionsGenerators/Generator'

const OptionsGenerator = new BetOptionsGenerator()

const DIGIT_ARRAY = ['万位', '千位', '百位', '十位', '个位']

export default {
  'yixing-dingweidan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'wuxing-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'sixing-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(1))
  },
  'qiansan-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(2))
  },
  'zhongsan-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(1, 4))
  },
  'housan-zhixuan-fushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(2))
  },
  'erxing-zhixuan-houerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(3))
  },
  'erxing-zhixuan-qianerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(0, 2))
  },
  'renxuan-renxuan2-zhixuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'renxuan-renxuan3-zhixuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'renxuan-renxuan4-zhixuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'renxuan-renxuan2-zhixuandanshi': {},
  'renxuan-renxuan3-zhixuandanshi': {},
  'renxuan-renxuan4-zhixuandanshi': {},
  'renxuan-renxuan2-zuxuandanshi': {},
  'renxuan-renxuan3-zusandanshi': {},
  'renxuan-renxuan3-zuliudanshi': {},
  'renxuan-renxuan3-hunhezuxuan': {},
  'renxuan-renxuan2-zhixuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 18, false), true)
  },
  'renxuan-renxuan3-zhixuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 27, false), true)
  },
  'renxuan-renxuan2-zuxuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 17, false), true)
  },
  'renxuan-renxuan3-zuxuanhezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 26, false), true)
  },
  'renxuan-renxuan2-zuxuanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'renxuan-renxuan3-zusanfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'renxuan-renxuan4-zuxuan24': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'renxuan-renxuan4-zuxuan12': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号', '单号'])
  },
  'renxuan-renxuan4-zuxuan6': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号'])
  },
  'renxuan-renxuan4-zuxuan4': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['三重号', '单号'])
  },
  'renxuan-renxuan3-zuliufushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'hezhi-wuxing-hezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 45, false), true)
  },
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
  'wuxing-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY)
  },
  'sixing-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(1))
  },
  'qiansan-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(2))
  },
  'zhongsan-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(3))
  },
  'housan-zhixuan-zuhe': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, DIGIT_ARRAY.slice(4))
  },
  'wuxing-zuxuan-zuxuan120': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'sixing-zuxuan-zuxuan24': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'erxing-zuxuan-houerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'erxing-zuxuan-qianerfushi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sanxingbudingwei-housanermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sanxingbudingwei-qiansanermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sanxingbudingwei-zhongsanermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-sixingbudingwei-sixingermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-wuxingbudingwei-wuxingermabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'budingwei-wuxingbudingwei-wuxingsanmabudingwei': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true)
  },
  'wuxing-zuxuan-zuxuan60': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号', '单号'])
  },
  'sixing-zuxuan-zuxuan12': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号', '单号'])
  },
  'wuxing-zuxuan-zuxuan30': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['二重号', '单号'])
  },
  'wuxing-zuxuan-zuxuan20': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['三重号', '单号'])
  },
  'sixing-zuxuan-zuxuan4': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(0, 9, false), true, ['三重号', '单号'])
  },
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
