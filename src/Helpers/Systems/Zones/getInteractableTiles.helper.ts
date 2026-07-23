import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const getInteractableTiles = () => {
  const profile = useProfileStore.getState().profile
  const currentMap = getCurrentMap()

  if (!profile?.currentLocation || !currentMap) {
    return []
  }

  return [
    ...currentMap.tiles.filter(
      (tile) =>
        tile.x === profile.currentLocation.x - 1 &&
        tile.y === profile.currentLocation.y
    ),
    ...currentMap.tiles.filter(
      (tile) =>
        tile.x === profile.currentLocation.x + 1 &&
        tile.y === profile.currentLocation.y
    ),
    ...currentMap.tiles.filter(
      (tile) =>
        tile.y === profile.currentLocation.y - 1 &&
        tile.x === profile.currentLocation.x
    ),
    ...currentMap.tiles.filter(
      (tile) =>
        tile.y === profile.currentLocation.y + 1 &&
        tile.x === profile.currentLocation.x
    )
  ].filter((tile) => tile.condition === undefined || !!tile.condition())
}
