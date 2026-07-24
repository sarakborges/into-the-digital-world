import type { MovePlayerParams } from '@/Helpers/Systems/Zones/movePlayer.helper'
import { movePlayer } from '@/Helpers/Systems/Zones/movePlayer.helper'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

export const setLocation = ({ x, y }: MovePlayerParams) => {
  const coordinates = movePlayer({ x, y })

  if (!coordinates) {
    return false
  }

  openCurrentTileScene()

  return true
}
