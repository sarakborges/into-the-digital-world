import { getCurrentZone } from './getCurrentZone.helper'

import type { ZoneTileType } from '@/Types/ZoneTile.type'

export const getNpcsOnZone = (): ZoneTileType[] => {
  const currentZone = getCurrentZone()

  if (!currentZone) {
    return []
  }

  return currentZone.tiles.filter(
    (tile) => (tile.condition === undefined || !!tile.condition()) && !!tile.npc
  )
}
