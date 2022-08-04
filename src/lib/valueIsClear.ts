export const valueIsClear = (value: string) => {
  const cmd = value?.split(' ')[0]
  return cmd === 'clear'
}
