import { isEmail } from '..'

describe('isEmail', () => {
  it.each([
    { tested: null, expected: false, label: null },
    { tested: '', expected: false, label: '' },
    { tested: undefined, expected: false, label: undefined },
    { tested: 'testcorreo.com', expected: false, label: 'testcorreo.com' },
    { tested: 'test@correo', expected: false, label: 'test@correo' },
    { tested: 'test@correo.com', expected: true, label: 'test@correo.com' }
  ])('isEmail($label) should be $expected', ({ tested, expected }) => {
    // @ts-expect-error tested can be null in this example
    expect(isEmail(tested)).toBe(expected)
  })
})
