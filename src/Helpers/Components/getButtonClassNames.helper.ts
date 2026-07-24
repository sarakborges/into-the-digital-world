export type ButtonVariant = 'primary' | 'secondary' | 'cancel'

type GetButtonClassNamesParams = {
  style: ButtonVariant | undefined
  className: string | undefined
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
