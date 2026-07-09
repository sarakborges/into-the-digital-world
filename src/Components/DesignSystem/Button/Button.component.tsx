import type { ButtonHTMLAttributes } from 'react'

import { getButtonClassNames } from '@/Helpers/Components'

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
  return (
    <button className={getButtonClassNames(style, className)} {...rest}>
      {children}
    </button>
  )
}
