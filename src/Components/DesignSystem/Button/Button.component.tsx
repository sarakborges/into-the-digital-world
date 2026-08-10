import type { ButtonHTMLAttributes } from 'react'

import { getButtonClassNames } from '@/Helpers/Components'

import './Button.style.scss'

type ButtonType = {
  variant?: 'primary' | 'secondary' | 'cancel'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonType> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  return (
    <button className={getButtonClassNames(variant, className)} {...rest}>
      {children}
    </button>
  )
}
