import { getCurrentMap } from './getCurrentMap.helper'

import type { NpcType } from '@/Types/Npc.type'

export const getNpcAt = ({
  tileX,
  tileY
}: {
  tileX: number
  tileY: number
}): NpcType | undefined => {
  const currentZone = getCurrentMap()

  if (!currentZone) {
    return undefined
  }

  const npcTile = currentZone.tiles.find(
    (tile) =>
      tile.x === tileX &&
      tile.y === tileY &&
      tile.npc &&
      (tile.condition === undefined || !!tile.condition())
  )

  return npcTile?.npc
}
