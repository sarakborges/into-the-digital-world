import type { ButtonHTMLAttributes } from 'react'

import './Button.style.scss'

type ButtonType = { cancel?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonType> = ({
  children,
  className,
  cancel,
  ...rest
}) => {
  const classNames = ['button']

  if (!!className) {
    classNames.push(className)
  }

  if (!!cancel) {
    classNames.push('cancel')
  }

  return (
    <button className={classNames.join(' ')} {...rest}>
      {children}
    </button>
  )
}
