import { TRANSITION_DELAY_MS } from '@/Consts/Transitions.const'

import { useGameStore } from '@/Stores/Game.store'

let transitionTimeout: ReturnType<typeof setTimeout> | null = null
let activeTransition = 0

export const transitionGame = (onTransitionComplete: () => void) => {
  const { game, setGame } = useGameStore.getState()

  if (game?.isTransitioning) {
    return
  }

  const transitionId = ++activeTransition

  if (transitionTimeout !== null) {
    clearTimeout(transitionTimeout)
  }

  setGame({
    ...(game ?? {}),
    isTransitioning: true
  })

  transitionTimeout = setTimeout(() => {
    if (transitionId !== activeTransition) {
      return
    }

    transitionTimeout = null

    try {
      onTransitionComplete()
    } finally {
      if (transitionId === activeTransition) {
        const { game, setGame } = useGameStore.getState()

        setGame({
          ...(game ?? {}),
          isTransitioning: false
        })
      }
    }
  }, TRANSITION_DELAY_MS)
}
