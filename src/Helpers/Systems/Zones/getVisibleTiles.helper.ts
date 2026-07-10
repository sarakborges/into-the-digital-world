import { getCurrentMap } from './getCurrentMap.helper'
import { getTileType } from './getTileType.helper'

import type { VisibleTileType } from '@/Types/ZoneHelpers.type'

import { useProfileStore } from '@/Stores/Profile.store'

export const getVisibleTiles = (): VisibleTileType[] => {
  const currentZone = getCurrentMap()
  const { profile } = useProfileStore.getState()

  if (!currentZone || !profile) {
    return []
  }

  const tiles: VisibleTileType[] = []
  const gridSize = Number(currentZone.gridSize)

  for (let y = 1; y <= gridSize; y++) {
    for (let x = 1; x <= gridSize; x++) {
      const tileX = x
      const tileY = y

      const tileType = getTileType({ tileX, tileY })

      if (!tileType) {
        continue
      }

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
