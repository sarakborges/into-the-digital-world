import type { ButtonHTMLAttributes, MouseEvent } from 'react'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useGameStore } from '@/Stores/Game.store'

import './ShadowButton.style.scss'

export const ShadowButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { variation?: string }
> = ({ children, variation, ...rest }) => {
  const { game } = useGameStore((state) => state)
  const { isTransitioning: isDialogTransitioning } = useDialogStore(
    (state) => state
  )

  const isDisabled =
    rest.disabled || !!game?.isTransitioning || isDialogTransitioning

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { game } = useGameStore.getState()
    const { isTransitioning: isDialogTransitioning } =
      useDialogStore.getState()

    if (
      rest.disabled ||
      game?.isTransitioning ||
      isDialogTransitioning
    ) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    rest.onClick?.(event)
  }

  return (
    <button
      className="shadow-button"
      {...rest}
      onClick={handleClick}
      disabled={isDisabled}
      data-variation={variation}
    >
      <div className="button-content">{children}</div>
      <div className="button-bg" />
    </button>
  )
}
