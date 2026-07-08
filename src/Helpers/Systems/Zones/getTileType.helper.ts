import type { ZoneEventType } from '@/Types/ZoneHelpers.type'
import { hasEventTypeAt } from './hasEventTypeAt.helper'
import { getCurrentZone } from './getCurrentZone.helper'
import { useProfileStore } from '@/Stores/Profile.store'
import { hasTileAt } from './hasTileAt.helper'

const isPlayerPosition = ({
  profile,
  tileX,
  tileY
}: {
  profile: { currentZone: { x: number; y: number } }
  tileX: number
  tileY: number
}) => profile.currentZone.x === tileX && profile.currentZone.y === tileY

const isWarpTile = ({
  events,
  tileX,
  tileY
}: {
  events: ZoneEventType[]
  tileX: number
  tileY: number
}) =>
  events.some(
    (tile) =>
      tile.x === tileX && tile.y === tileY && tile.onEnter?.type === 'warp'
  )

export const getTileType = ({
  tileX,
  tileY
}: {
  tileX: number
  tileY: number
}) => {
  const currentZone = getCurrentZone()
  const { profile } = useProfileStore.getState()

  if (!currentZone || !profile) {
    return 'blocked'
  }

  const events = currentZone.tiles.filter(
    (tile) =>
      (tile.condition === undefined || !!tile.condition()) &&
      (!!tile.onEnter || !!tile.events?.length)
  )

  const npcs = currentZone.tiles.filter(
    (tile) => (tile.condition === undefined || !!tile.condition()) && !!tile.npc
  )

  if (!currentZone.grid[tileY]?.[tileX]) {
    return 'blocked'
  }

  if (isPlayerPosition({ profile, tileX, tileY })) {
    return 'player'
  }

  if (hasTileAt(events, tileX, tileY)) {
    return 'event'
  }

  if (isWarpTile({ events, tileX, tileY })) {
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
