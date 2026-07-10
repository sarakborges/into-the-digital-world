import { getCurrentMap } from './getCurrentMap.helper'

import type { MapTileType } from '@/Types/MapTile.type'

export const getNpcsOnZone = (): MapTileType[] => {
  const currentZone = getCurrentMap()

  if (!currentZone) {
    return []
  }

  return currentZone.tiles.filter(
    (tile) => (tile.condition === undefined || !!tile.condition()) && !!tile.npc
  )
}
