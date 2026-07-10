import { saveSession } from '@/Helpers/Systems/Data'
import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const setLocation = ({ x, y }: { x?: number; y?: number }) => {
  const { profile } = useProfileStore.getState()
  const currentMap = getCurrentMap()

  if (!profile || !currentMap) {
    return false
  }

  const updatedX = profile.currentZone.x + (x || 0)
  const updatedY = profile.currentZone.y + (y || 0)

  const updatedProfile = {
    ...profile,

    currentZone: {
      ...profile.currentZone,
      x: updatedX,
      y: updatedY
    }
  }

  saveSession(updatedProfile)

  const currentTile = currentMap.tiles.find(
    (tile) =>
      tile.x === updatedX &&
      tile.y === updatedY &&
      (tile.condition === undefined || !!tile.condition())
  )

  if (
    !!currentTile?.onEnter &&
    (currentTile.condition === undefined || !!currentTile?.condition())
  ) {
    currentTile.onEnter.function()

    return
  }
}
