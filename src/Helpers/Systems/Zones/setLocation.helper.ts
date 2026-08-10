import { movePlayer } from './movePlayer.helper'

export const setLocation = ({ x, y }: { x?: number; y?: number }) => {
  const coordinates = movePlayer({ x, y })

  if (!coordinates) {
    return false
  }
}
