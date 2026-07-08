import { getTileType } from './getTileType.helper'

import type { ZoneType } from '@/Types/Zone.type'
import type {
  VisibleTileType,
  ZoneEventType,
  ZoneProfilePositionType
} from '@/Types/ZoneHelpers.type'

export const getVisibleTiles = (
  currentZone: ZoneType,
  profile: ZoneProfilePositionType,
  events: ZoneEventType[],
  npcs: Array<{ x: number; y: number }>
) => {
  const tiles: VisibleTileType[] = []
  const gridSize = Number(currentZone.gridSize)

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const tileType = getTileType(currentZone, profile, events, npcs, x, y)
      const tileX = x + 1
      const tileY = y + 1

      tiles.push({
        id: `${tileX}-${tileY}`,
        type: tileType,
        x: tileX,
        y: tileY
      })
    }
  }

  return tiles
}
