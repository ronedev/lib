import { isPhone } from '..'

describe('isPhone', () => {
  it.each([
    { tested: null, expected: false, label: null },
    { tested: '', expected: false, label: '' },
    { tested: undefined, expected: false, label: undefined },
    { tested: '2604846152', expected: true, label: '2604846152' },
    { tested: '1234', expected: false, label: '1234' },
    { tested: '1234567fasfa', expected: false, label: '1234567fasfa' },
    { tested: '154642584', expected: true, label: '154642584' }
  ])('isPhone($label) should be $expected', ({ tested, expected }) => {
    // @ts-expect-error tested can be null in this example
    expect(isPhone(tested)).toBe(expected)
  })
})
