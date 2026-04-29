import type { TileType } from '@/Types/Tile.type'

import { AllNpcs } from '@/GameData/Npcs'

export const RootDomainY4X2: TileType = {
  npc: AllNpcs.angewomon,
  texture: 'gray',

  canMove: {
    up: true,
    down: true,
    left: true,
    right: true
  }
}
