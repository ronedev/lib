import { min } from '../min'

describe('min function', () => {
  it.each([
    { tested: { value: null, min: null }, expected: false, label: null },
    { tested: { value: '', min: 1 }, expected: false, label: { value: '', min: 1 } },
    { tested: { value: '1234', min: 1 }, expected: true, label: { value: '1234', min: 1 } },
    { tested: { value: '1234', min: undefined }, expected: false, label: { value: '1234', min: undefined } },
    { tested: { value: undefined, min: 1 }, expected: false, label: { value: undefined, min: 1 } }
  ])('min($tested) should be $expected', ({ tested, expected }) => {
    // @ts-expect-error tested.value can be null for this test
    expect(min(tested.value, tested.min)).toBe(expected)
  })
})
