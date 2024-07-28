import { max } from '../max'

describe('max function', () => {
  it.each([
    { tested: { value: null, max: null }, expected: false, label: null },
    { tested: { value: undefined, max: 4 }, expected: false, label: { value: undefined, max: 4 } },
    { tested: { value: 'prueba', max: 2 }, expected: false, label: { value: 'prueba', max: 2 } },
    { tested: { value: 'prueba', max: 6 }, expected: true, label: { value: 'prueba', max: 6 } }
  ])('max($label) should be $expected', ({ tested, expected }) => {
    // @ts-expect-error tested.value can be null for this test
    expect(max(tested.value, tested.max)).toBe(expected)
  })
})
