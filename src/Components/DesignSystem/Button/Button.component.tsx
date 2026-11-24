import type { ButtonHTMLAttributes, MouseEvent } from 'react'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useGameStore } from '@/Stores/Game.store'

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
  const { isTransitioning } = useGameStore((state) => state)
  const { isTransitioning: isDialogTransitioning } = useDialogStore(
    (state) => state
  )

  const isDisabled =
    rest.disabled || isTransitioning || isDialogTransitioning

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { isTransitioning } = useGameStore.getState()
    const { isTransitioning: isDialogTransitioning } =
      useDialogStore.getState()

    if (rest.disabled || isTransitioning || isDialogTransitioning) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    rest.onClick?.(event)
  }

  const classNames = ['button']

  if (variant === 'primary' || !variant) {
    classNames.push('primary')
  }

  if (variant === 'secondary') {
    classNames.push('secondary')
  }

  if (variant === 'cancel') {
    classNames.push('cancel')
  }

  if (className) {
    classNames.push(className)
  }

  return (
    <button
      className={classNames.join(' ')}
      {...rest}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
