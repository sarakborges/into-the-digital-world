import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const getInteractableTiles = () => {
  const profile = useProfileStore.getState().profile

  const currentMap = getCurrentMap()

  if (!profile?.currentZone || !currentMap) {
    return []
  }

  return [
    ...currentMap.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x - 1 && tile.y === profile.currentZone.y
    ),
    ...currentMap.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x + 1 && tile.y === profile.currentZone.y
    ),
    ...currentMap.tiles.filter(
      (tile) =>
        tile.y === profile.currentZone.y - 1 && tile.x === profile.currentZone.x
    ),
    ...currentMap.tiles.filter(
      (tile) =>
        tile.y === profile.currentZone.y + 1 && tile.x === profile.currentZone.x
    )
  ].filter((tile) => tile.condition === undefined || !!tile.condition())
}
