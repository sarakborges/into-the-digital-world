import { getCurrentZone } from './getCurrentZone.helper'
import { getTileType } from './getTileType.helper'

import type { VisibleTileType } from '@/Types/ZoneHelpers.type'

import { useProfileStore } from '@/Stores/Profile.store'

export const getVisibleTiles = (): VisibleTileType[] => {
  const currentZone = getCurrentZone()
  const { profile } = useProfileStore.getState()

  if (!currentZone || !profile) {
    return []
  }

  const tiles: VisibleTileType[] = []
  const gridSize = Number(currentZone.gridSize)

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const tileX = x + 1
      const tileY = y + 1

      const tileType = getTileType({ tileX, tileY })

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
