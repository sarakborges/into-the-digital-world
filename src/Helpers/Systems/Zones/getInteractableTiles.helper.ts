import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

export const getInteractableTiles = () => {
  const profile = useProfileStore.getState().profile

  if (!profile?.currentZone) {
    return []
  }

  const currentZone: ZoneType = AllZones[profile.currentZone.id][
    profile.currentZone.map
  ] as ZoneType

  return [
    ...currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x - 1 && tile.y === profile.currentZone.y
    ),
    ...currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x + 1 && tile.y === profile.currentZone.y
    ),
    ...currentZone.tiles.filter(
      (tile) =>
        tile.y === profile.currentZone.y - 1 && tile.x === profile.currentZone.x
    ),
    ...currentZone.tiles.filter(
      (tile) =>
        tile.y === profile.currentZone.y + 1 && tile.x === profile.currentZone.x
    )
  ].filter((tile) => tile.condition === undefined || !!tile.condition())
}
