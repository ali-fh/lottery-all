import BetOptionsGeneratorPK10 from '../optionsGenerators/BetOptionsGeneratorPK10'

const OptionsGenerator = new BetOptionsGeneratorPK10()
const TITLE_LABEL_ARRAY: string[] = ['冠军', '亚军', '第三', '第四', '第五', '第六', '第七', '第八', '第九', '第十']

export default {
  'zhixuanhezhi-hezhi-guanyahezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(3, 19, false), true)
  },
  'liangmianpan-zhixuan-guanyahezhi': {
    betOptions: OptionsGenerator.generatBetOptions(['大', '小', '单', '双'], false, ['冠亚和'])
  },
  'liangmianpan-zhixuan-rate_daccording': {
    betOptions: OptionsGenerator.generatBetOptions(['大', '小', '单', '双'], false, TITLE_LABEL_ARRAY)
  },
  'liangmianpan-zhixuan-dragonwithtiger': {
    betOptions: OptionsGenerator.getDragonWithTiger(TITLE_LABEL_ARRAY)
  },
  'caichehao-dingweidan-dingweidan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 10, false), true)
  },
  'budingwei-sanxingbudingwei-qiansan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 10, false), true, ['前三'])
  },
  'budingwei-sanxingbudingwei-housan': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 10, false), true, ['后三'])
  },
  'caipaiwei-zhixuanpk-guanyajun': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 10, false), true, TITLE_LABEL_ARRAY.slice(0, 2))
  },
  'caipaiwei-zhixuanpk-qiansanpk': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 10, false), true, TITLE_LABEL_ARRAY.slice(0, 3))
  },
  'caipaiwei-zhixuanpk-qiansipk': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 10, false), true, TITLE_LABEL_ARRAY.slice(0, 4))
  },
  'caipaiwei-zhixuanpk-qianwu': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(1, 10, false), true, TITLE_LABEL_ARRAY.slice(0, 5))
  },
  'caipaiwei-zhixuanpk-pk10qiansandanshi': {},
  'caipaiwei-zhixuanpk-pk10qiansidanshi': {},
  'caipaiwei-zhixuanpk-pk10qianwudanshi': {}
}
