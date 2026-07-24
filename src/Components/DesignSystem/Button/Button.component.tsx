import type { ButtonHTMLAttributes } from 'react'

import '@/Components/DesignSystem/Button/Button.style.scss'

export type ButtonVariant = 'primary' | 'secondary' | 'cancel'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant | undefined
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...buttonProps
}) => {
  const classNames = ['button', variant, className].filter(Boolean).join(' ')

  return (
    <button className={classNames} {...buttonProps}>
      {children}
    </button>
  )
}
