import { movePlayer } from '@/Helpers/Systems/Zones/movePlayer.helper'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

export const setLocation = ({ x, y }: { x?: number; y?: number }) => {
  const coordinates = movePlayer({ x, y })

  if (!coordinates) {
    return false
  }

  openCurrentTileScene()
}
