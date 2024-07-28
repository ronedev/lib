import { isEmail } from '..'

describe('isEmail', () => {
  it.each([
    { tested: null, expected: false, label: null },
    { tested: '', expected: false, label: '' },
    { tested: 'test@correo.com', expected: true, label: 'test@correo.com' }
  ])('isEmail($label) should be $expected', ({ tested, expected }) => {
    // @ts-expect-error tested can be null in this example
    expect(isEmail(tested)).toBe(expected)
  })
})
