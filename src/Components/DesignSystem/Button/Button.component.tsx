import type {ButtonHTMLAttributes} from 'react'

import './Button.style.scss'

type ButtonType = {
  style?: 'primary' | 'secondary' | 'cancel'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonType> = ({
  children,
  className,
  style,
  ...rest
}) => {
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

  if (!!className) {
    classNames.push(className)
  }

  return (
    <button className={classNames.join(' ')} {...rest}>
      {children}
    </button>
  )
}
