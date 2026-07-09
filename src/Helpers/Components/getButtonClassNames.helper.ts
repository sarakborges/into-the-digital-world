export const getButtonClassNames = (
  style?: 'primary' | 'secondary' | 'cancel',
  className?: string
): string => {
  const classNames = ['button']

  if (style === 'primary' || !style) {
    classNames.push('primary')
  }

  if (style === 'secondary') {
    classNames.push('secondary')
  }

  if (style === 'cancel') {
    classNames.push('cancel')
  }

  if (className) {
    classNames.push(className)
  }

  return classNames.join(' ')
}
