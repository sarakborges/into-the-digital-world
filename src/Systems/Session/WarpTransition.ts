import { useGameStore } from '@/Stores/Game.store'

let activeTransition = 0
let warpTimer: ReturnType<typeof setTimeout> | undefined
let finishTimer: ReturnType<typeof setTimeout> | undefined

const clearTransitionTimer = (
  timer: ReturnType<typeof setTimeout> | undefined
): void => {
  if (timer !== undefined) {
    clearTimeout(timer)
  }
}

export const cancelWarpTransition = (): void => {
  activeTransition += 1

  clearTransitionTimer(warpTimer)
  clearTransitionTimer(finishTimer)

  warpTimer = undefined
  finishTimer = undefined

  useGameStore.getState().resetGame()
}

export const startWarpTransition = ({
  onWarp
}: {
  onWarp: () => void
}): void => {
  cancelWarpTransition()

  const transition = activeTransition
  const { setGame, resetGame } = useGameStore.getState()

  setGame({ isWarping: true })

  warpTimer = setTimeout(() => {
    if (transition !== activeTransition) {
      return
    }

    warpTimer = undefined
    onWarp()
  }, 300)

  finishTimer = setTimeout(() => {
    if (transition !== activeTransition) {
      return
    }

    finishTimer = undefined
    resetGame()
  }, 600)
}
