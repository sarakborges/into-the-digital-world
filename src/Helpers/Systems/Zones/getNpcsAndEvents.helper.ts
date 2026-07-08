import type { ZoneTileType } from '@/Types/ZoneTile.type'

export const getNpcsOnZone = (tiles: ZoneTileType[]): ZoneTileType[] => {
  return tiles.filter(
    (tile) => (tile.condition === undefined || !!tile.condition()) && !!tile.npc
  )
}

export const getEventsOnZone = (tiles: ZoneTileType[]): ZoneTileType[] => {
  return tiles.filter(
    (tile) =>
      (tile.condition === undefined || !!tile.condition()) &&
      (!!tile.onEnter || !!tile.events?.length)
  )
}

export const getActiveEvents = (
  tile: ZoneTileType
): ZoneTileType['events'] | undefined => {
  return tile?.events?.filter(
    (event) => event.condition === undefined || !!event.condition()
  )
}
