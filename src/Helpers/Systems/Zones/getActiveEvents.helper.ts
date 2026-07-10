import type { MapTileType } from '@/Types/MapTile.type'

export const getActiveEvents = (
  tile: MapTileType
): MapTileType['events'] | undefined => {
  return tile?.events?.filter(
    (event) => event.condition === undefined || !!event.condition()
  )
}
