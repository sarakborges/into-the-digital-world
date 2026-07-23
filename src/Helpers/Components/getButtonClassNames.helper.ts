type GetButtonClassNamesParams = {
  style?: 'primary' | 'secondary' | 'cancel'
  className?: string
}

export const getButtonClassNames = ({
  style,
  className
}: GetButtonClassNamesParams): string => {
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
