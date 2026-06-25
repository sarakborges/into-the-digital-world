import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

export const canMoveToCoordinate = ({ x, y }: { x: number; y: number }) => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return false
  }

  const currentZone: ZoneType =
    AllZones[profile.currentZone.id][profile.currentZone.map]

  const tile = currentZone.tiles.filter(
    (tile) =>
      tile.x === profile.currentZone.x + x &&
      tile.y === profile.currentZone.y + y
  )

  const npcExists = !!tile?.some(
    (tile) => !!tile.npc && (tile.condition === undefined || !!tile.condition())
  )

  const eventExists = !!tile?.some(
    (tile) =>
      !!tile.onEnter && (tile.condition === undefined || !!tile.condition())
  )

  const existsInGrid =
    !!currentZone?.grid[profile.currentZone.y + y]?.[profile.currentZone.x + x]

  return (eventExists || existsInGrid) && !npcExists
}
