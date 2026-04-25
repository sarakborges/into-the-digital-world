import type { TileType } from '@/Types/Tile.type'

import { NpcCulumon } from '@/GameData/Npcs/Culumon.npc'

export const defaultTile: TileType = {
  texture: 'black',

  canMove: {
    up: true,
    down: true,
    left: true,
    right: true
  }
}
