import BetOptionsGeneratorPK10 from '../optionsGenerators/GeneratorPK10'
import CalculatorPK10 from '../profitCalculators/CalculatorPK10'

import { encode as DaXiaoDanShuangEncode, decode as DaXiaoDanShuangDecode } from '../encoders/DaXiaoDanShuang'
import { ProfitParams } from 'src/Interfases'

const OptionsGenerator = new BetOptionsGeneratorPK10()
const Calculator = new CalculatorPK10()

const ONE_TO_TEN_ARRAY: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const TITLE_LABEL_ARRAY: string[] = ['冠军', '亚军', '第三', '第四', '第五', '第六', '第七', '第八', '第九', '第十']

export default {
  'zhixuanhezhi-hezhi-guanyahezhi': {
    betOptions: OptionsGenerator.generatBetOptions(OptionsGenerator.generatButtonNumbers(3, 19, false), true),
    isSingleNum: true
  },
  'liangmianpan-zhixuan-guanyahezhi': {
    betOptions: OptionsGenerator.generatBetOptions(['大', '小', '单', '双'], false, ['冠亚和']),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode,
    getProfit: function (params: ProfitParams): string {
      return Calculator.getProfitGuanYaHeZhi(params, this.betOptions[0].selected)
    }
  },
  'liangmianpan-zhixuan-rate_daccording': {
    betOptions: OptionsGenerator.generatBetOptions(['大', '小', '单', '双'], false, TITLE_LABEL_ARRAY),
    encode: DaXiaoDanShuangEncode,
    decode: DaXiaoDanShuangDecode
  },
  'liangmianpan-zhixuan-dragonwithtiger': {
    betOptions: OptionsGenerator.getDragonWithTiger(TITLE_LABEL_ARRAY)
  },
  'caichehao-dingweidan-dingweidan': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1))
  },
  'budingwei-sanxingbudingwei-qiansan': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(['前三']),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: number) => ONE_TO_TEN_ARRAY[key]
  },
  'budingwei-sanxingbudingwei-housan': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(['后三']),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: number) => ONE_TO_TEN_ARRAY[key]
  },
  'caipaiwei-zhixuanpk-guanyajun': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(TITLE_LABEL_ARRAY.slice(0, 2)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1))
  },
  'caipaiwei-zhixuanpk-qiansanpk': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(TITLE_LABEL_ARRAY.slice(0, 3)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1))
  },
  'caipaiwei-zhixuanpk-qiansipk': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(TITLE_LABEL_ARRAY.slice(0, 4)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1))
  },
  'caipaiwei-zhixuanpk-qianwu': {
    betOptions: OptionsGenerator.generatBetOptionsPK10(TITLE_LABEL_ARRAY.slice(0, 5)),
    encode: (key: string): number => ONE_TO_TEN_ARRAY.indexOf(key),
    decode: (key: string) => (key === '|' ? ' ' + key : ' ' + String(Number(key) + 1))
  },
  'caipaiwei-zhixuanpk-pk10qiansandanshi': {},
  'caipaiwei-zhixuanpk-pk10qiansidanshi': {},
  'caipaiwei-zhixuanpk-pk10qianwudanshi': {}
}
