import InputFilter from '../../src/InputFilter'

describe('test InputFilter', () => {
  const inputFilter = new InputFilter()

  test('test stringFilter function', () => {
    const str: string = '02 03 04 05 06 01 10\n02 03\n02 03\n02 11\n02 02 02 02 02 02 02\n02 02 02 02 02 04 03'
    expect(inputFilter.stringFilter(str, 10, 2)).toStrictEqual(['02 03'])
    expect(inputFilter.stringFilter(str, 10, 7)).toStrictEqual(['02 03 04 05 06 01 10'])
  })

  test('test stringFilterSSC function', () => {
    const str: string = '01 02 03\n02 03 04\n08 08 07\n03 03 00\n09 08 08\n04 05 06\n03 02 04 05\n03 03 03\n08 08 09\n09 08 08'
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
    ).toStrictEqual(['08 08 07', '03 03 00', '09 08 08'])

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
    ).toStrictEqual(['08 08 07', '03 03 00', '09 08 08', '08 08 09'])

    expect(
      inputFilter.stringFilterSSC.call(
        {
          noBaozi: true,
          noOrder: true,
          betCount: () => 4
        },
        str
      )
    ).toStrictEqual(['03 02 04 05'])
  })
})
