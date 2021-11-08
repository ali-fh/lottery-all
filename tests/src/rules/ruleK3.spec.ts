import ruleK3 from '../../../src/rules/ruleK3'

const rule: any = ruleK3

describe.each(['k3-k3-hezhi', 'k3-k3-daxiaodanshuang', 'k3-k3-santonghao', 'k3-k3-sanbutonghao', 'k3-k3-sanlianhao', 'k3-k3-erbutonghao', 'k3-k3-ertonghao', 'k3-k3-dantiaoyishai'])('%s', (name) => {
  const arr1: Array<string> = ['112', '113', '114', '115', '116', '122', '223', '224', '225', '226', '133', '233', '334', '335', '336']
  const arr2: Array<string> = ['144', '244', '344', '445', '446', '155', '255', '355', '455', '556', '166', '266', '366', '466', '566']
  const obj: any = {
    'k3-k3-hezhi': ['03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    'k3-k3-daxiaodanshuang': ['大', '小', '单', '双'],
    'k3-k3-santonghao': ['666', '555', '444', '333', '222', '111'],
    'k3-k3-sanbutonghao': ['123', '124', '125', '126', '134', '135', '136', '145', '146', '156', '234', '235', '236', '245', '246', '256', '345', '346', '356', '456'],
    'k3-k3-sanlianhao': ['123', '234', '345', '456'],
    'k3-k3-erbutonghao': ['12', '13', '14', '15', '16', '23', '24', '25', '26', '34', '35', '36', '45', '46', '56'],
    'k3-k3-ertonghao': arr1.concat(arr2),
    'k3-k3-dantiaoyishai': ['6', '5', '4', '3', '2', '1']
  }
  test(`应为[${obj[name]}]`, () => {
    expect(rule[name].betOptions[0].options).toStrictEqual(obj[name])
  })
})
