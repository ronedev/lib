export function isPhone (phone: string): boolean {
  const re = /^\+?[1-9]\d{6,14}$/
  return re.test(phone)
}
