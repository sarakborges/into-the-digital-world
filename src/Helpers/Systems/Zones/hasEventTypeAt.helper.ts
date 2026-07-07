import type { ZoneEventType } from '@/Types/ZoneHelpers.type'

export const hasEventTypeAt = (
  events: ZoneEventType[],
  x: number,
  y: number,
  eventType: 'important' | 'dungeon'
) =>
  events.some(
    (tile) =>
      tile.x === x &&
      tile.y === y &&
      tile.events?.some((event) => event.eventType === eventType)
  )
