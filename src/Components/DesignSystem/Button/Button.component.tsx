import type { ButtonHTMLAttributes } from 'react'

import type { ButtonVariant } from '@/Helpers/Components/getButtonClassNames.helper'
import { getButtonClassNames } from '@/Helpers/Components/getButtonClassNames.helper'

import '@/Components/DesignSystem/Button/Button.style.scss'

type ButtonType = {
  style?: ButtonVariant | undefined
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'>

export const Button: React.FC<ButtonType> = ({
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <button className={getButtonClassNames({ style, className })} {...rest}>
      {children}
    </button>
  )
}
