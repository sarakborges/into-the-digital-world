import type { ButtonHTMLAttributes } from 'react'

import './ShadowButton.style.scss'

type ShadowButtonType = {
  variant?: 'primary' | 'secondary' | 'cancel'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ShadowButton: React.FC<ShadowButtonType> = ({
  children,
  variant,
  ...rest
}) => {
  return (
    <button className="shadow-button" {...rest}>
      <div className="button-content">{children}</div>

      <div className="button-bg">
        <div />
        <div />
      </div>
    </button>
  )
}
