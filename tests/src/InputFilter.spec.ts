import InputFilter from '../../src/InputFilter'

describe('test InputFilter', () => {
  const inputFilter = new InputFilter()

  test('test stringFilter function', () => {
    const str: string = '02 03 04 05 06 01 10|02 03|02 03|02 11|02 02 02 02 02 02 02|02 02 02 02 02 04 03'
    expect(inputFilter.stringFilter(str, 10, 2)).toStrictEqual(['02 03'])
    expect(inputFilter.stringFilter(str, 10, 7)).toStrictEqual(['02 03 04 05 06 01 10'])
  })

  test('test stringFilterSSC function', () => {
    const str: string = '123 234 887|330|988|456|3245|333 889 988'
    expect(
      inputFilter.stringFilterSSC.call(
        {
          isNeedRepeat: true,
          mustRepeatNum: 2,
          noBaozi: true,
          noOrder: true,
          betCount: () => 3
        },
        str
      )
    ).toStrictEqual(['887', '330', '988'])

    expect(
      inputFilter.stringFilterSSC.call(
        {
          isNeedRepeat: true,
          mustRepeatNum: 2,
          noBaozi: true,
          noOrder: false,
          betCount: () => 3
        },
        str
      )
    ).toStrictEqual(['887', '330', '988', '889'])

    expect(
      inputFilter.stringFilterSSC.call(
        {
          noBaozi: true,
          noOrder: true,
          betCount: () => 4
        },
        str
      )
    ).toStrictEqual(['3245'])
  })
})
