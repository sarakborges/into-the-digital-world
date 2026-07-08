import { getCurrentZone } from './getCurrentZone.helper'
import { useProfileStore } from '@/Stores/Profile.store'

export const getInteractableTiles = () => {
  const currentZone = getCurrentZone()
  const { profile } = useProfileStore.getState()

  if (!currentZone || !profile?.currentZone) {
    return []
  }

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
