import { getCurrentMap } from './getCurrentMap.helper'
import { hasEventTypeAt } from './hasEventTypeAt.helper'
import { hasTileAt } from './hasTileAt.helper'

import type { ZoneEventType } from '@/Types/ZoneHelpers.type'

import { useProfileStore } from '@/Stores/Profile.store'

const isPlayerPosition = (tileX: number, tileY: number): boolean => {
  const profile = useProfileStore.getState().profile
  return profile?.currentZone?.x === tileX && profile?.currentZone?.y === tileY
}

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
  const currentZone = getCurrentMap()

  if (!currentZone) {
    return
  }

  const events = currentZone.tiles.filter(
    (tile) =>
      (tile.condition === undefined || !!tile.condition()) &&
      (!!tile.onEnter || !!tile.events?.length)
  )

  const npcs = currentZone.tiles.filter(
    (tile) => (tile.condition === undefined || !!tile.condition()) && !!tile.npc
  )

  if (isPlayerPosition(tileX, tileY)) {
    return 'player'
  }

  if (isWarpTile({ events, tileX, tileY })) {
    return 'warp'
  }

  if (hasTileAt(events, tileX, tileY)) {
    return 'event'
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
}
