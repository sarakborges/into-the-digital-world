import type { ZoneType } from '@/Types/Zone.type'

import { saveSession } from '@/Helpers/Systems/Data'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

export const setLocation = ({ x, y }: { x?: number; y?: number }) => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return false
  }

  const currentZone: ZoneType =
    AllZones[profile.currentZone.id][profile.currentZone.map]

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

  const currentTile = currentZone.tiles.find(
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
