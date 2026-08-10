import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const getInteractableTiles = () => {
  const profile = useProfileStore.getState().profile
  const currentMap = getCurrentMap()

  if (!profile?.currentZone || !currentMap) {
    return []
  }

  const coordinates = [
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },

    { x: -1, y: 0 },
    { x: 1, y: 0 },

    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 }
  ]

  return currentMap.tiles.filter((tile) => {
    const isAdjacent = coordinates.some(
      (coordinate) =>
        tile.x === profile.currentZone.x + coordinate.x &&
        tile.y === profile.currentZone.y + coordinate.y
    )

    return isAdjacent && (tile.condition === undefined || !!tile.condition())
  })
}
