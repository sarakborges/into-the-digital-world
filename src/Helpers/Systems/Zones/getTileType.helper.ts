import type { ZoneType } from '@/Types/Zone.type'
import type {
  ZoneEventType,
  ZoneProfilePositionType
} from '@/Types/ZoneHelpers.type'
import { hasEventTypeAt } from './hasEventTypeAt.helper'
import { hasTileAt } from './hasTileAt.helper'

const isPlayerPosition = (
  profile: ZoneProfilePositionType,
  tileX: number,
  tileY: number
) => profile.currentZone.x === tileX && profile.currentZone.y === tileY

const isWarpTile = (events: ZoneEventType[], tileX: number, tileY: number) =>
  events.some(
    (tile) =>
      tile.x === tileX && tile.y === tileY && tile.onEnter?.type === 'warp'
  )

export const getTileType = (
  currentZone: ZoneType,
  profile: ZoneProfilePositionType,
  events: ZoneEventType[],
  npcs: Array<{ x: number; y: number }>,
  tileX: number,
  tileY: number
) => {
  if (!currentZone.grid[tileY]?.[tileX]) {
    return 'blocked'
  }

  if (isPlayerPosition(profile, tileX, tileY)) {
    return 'player'
  }

  if (hasTileAt(events, tileX, tileY)) {
    return 'event'
  }

  if (isWarpTile(events, tileX, tileY)) {
    return 'warp'
  }

  if (hasTileAt(npcs, tileX, tileY)) {
    return 'npc'
  }

  if (hasEventTypeAt(events, tileX, tileY, 'important')) {
    return 'important'
  }

  if (hasEventTypeAt(events, tileX, tileY, 'dungeon')) {
    return 'dungeon'
  }

  return 'floor'
}
