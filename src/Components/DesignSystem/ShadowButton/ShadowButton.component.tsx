import type { ButtonHTMLAttributes } from 'react'

import { useGameStore } from '@/Stores/Game.store'

import './ShadowButton.style.scss'

export const ShadowButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { variation?: string }
> = ({ children, variation, ...rest }) => {
  const { game } = useGameStore((state) => state)

  return (
    <button
      className="shadow-button"
      {...rest}
      disabled={rest.disabled || !!game?.isTransitioning}
      data-variation={variation}
    >
      <div className="button-content">{children}</div>
      <div className="button-bg" />
    </button>
  )
}
