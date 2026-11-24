import { useGameStore } from '@/Stores/Game.store'

let transitionTimeout: ReturnType<typeof setTimeout> | null = null
let activeTransition = 0

export const transitionGame = (onTransitionComplete: () => void) => {
  const { game, isTransitioning, setGame, setIsTransitioning } =
    useGameStore.getState()

  if (isTransitioning || game?.isTransitioning) {
    return
  }

  const transitionId = ++activeTransition

  if (transitionTimeout !== null) {
    clearTimeout(transitionTimeout)
  }

  setIsTransitioning(true)
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
        const {
          game: currentGame,
          setGame: updateGame,
          setIsTransitioning: updateTransition
        } = useGameStore.getState()

        updateGame({
          ...(currentGame ?? {}),
          isTransitioning: false
        })
        updateTransition(false)
      }
    }
  }, 600)
}
