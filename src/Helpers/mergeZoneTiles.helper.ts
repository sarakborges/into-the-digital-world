import type { GridType } from '@/Types/Grid.type'
import type { TileType } from '@/Types/Tile.type'

export const mergeZoneTiles = ({
  grid,
  events
}: {
  grid: GridType
  events: Array<{
    x: number
    y: number
    tile: TileType
  }>
}): GridType => {
  for (let event of events) {
    if (!!event.tile.npc) {
      grid[event.y][event.x] = { npc: event.tile.npc }
    }

    if (!!event.tile.onEnter) {
      grid[event.y][event.x] = { onEnter: event.tile.onEnter }
    }
  }

  return grid
}
