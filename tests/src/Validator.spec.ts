import Validator from '../../src/Validator'

test('没有重复', () => {
  expect(Validator.hasDuplicates(['111', '222', '333'])).toBe(false)
})

test('有重复', () => {
  expect(Validator.hasDuplicates(['111', '222', '333', '222'])).toBe(true)
})
