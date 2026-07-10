import { getCurrentMap } from './getCurrentMap.helper'

import type { MapTileType } from '@/Types/MapTile.type'

export const getEventsOnZone = (): MapTileType[] => {
  const currentZone = getCurrentMap()

  if (!currentZone) {
    return []
  }

  return currentZone.tiles.filter(
    (tile) =>
      (tile.condition === undefined || !!tile.condition()) &&
      (!!tile.onEnter || !!tile.events?.length)
  )
}
