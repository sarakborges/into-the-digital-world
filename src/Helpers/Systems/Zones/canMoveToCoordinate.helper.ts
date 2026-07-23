import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const canMoveToCoordinate = ({
  x,
  y
}: {
  x: number
  y: number
}): boolean => {
  const profile = useProfileStore.getState().profile
  const currentMap = getCurrentMap()

  if (!profile || !currentMap) {
    return false
  }

  const tile = currentMap.tiles.filter(
    (tile) =>
      tile.x === profile.currentLocation.x + x &&
      tile.y === profile.currentLocation.y + y
  )

  const npcExists = !!tile?.some(
    (tile) => !!tile.npc && (tile.condition === undefined || !!tile.condition())
  )

  const eventExists = !!tile?.some(
    (tile) =>
      !!tile.onEnter && (tile.condition === undefined || !!tile.condition())
  )

  const existsInGrid =
    !!currentMap?.grid[profile.currentLocation.y + y]?.[
      profile.currentLocation.x + x
    ]

  return (eventExists || existsInGrid) && !npcExists
}
