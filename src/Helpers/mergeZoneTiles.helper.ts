import type { GridType } from '@/Types/Grid.type'
import type { TileType } from '@/Types/Tile.type'

export const mergeZoneTiles = ({
  grid,
  tiles
}: {
  grid: GridType
  tiles: Array<{
    x: number
    y: number
    data: TileType
  }>
}): GridType => {
  for (let tile of tiles) {
    if (!!tile.data.npc) {
      grid[tile.y][tile.x] = { ...grid[tile.y][tile.x], npc: tile.data.npc }
    }

    if (!!tile.data.events) {
      grid[tile.y][tile.x] = {
        ...grid[tile.y][tile.x],
        events: tile.data.events
      }
    }
  }

  return grid
}
