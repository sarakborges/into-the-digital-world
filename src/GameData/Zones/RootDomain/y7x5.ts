import type { TileType } from '@/Types/Tile.type'

import { AllNpcs } from '@/GameData/Npcs'

export const RootDomainY7X5: TileType = {
  npc: AllNpcs.angewomon,
  texture: 'gray',

  canMove: {
    up: true,
    down: true,
    left: true,
    right: true
  }
}
