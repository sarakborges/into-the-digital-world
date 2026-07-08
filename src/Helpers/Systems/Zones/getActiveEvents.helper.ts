import type { ZoneTileType } from '@/Types/ZoneTile.type'

export const getActiveEvents = (
  tile: ZoneTileType
): ZoneTileType['events'] | undefined => {
  return tile?.events?.filter(
    (event) => event.condition === undefined || !!event.condition()
  )
}
