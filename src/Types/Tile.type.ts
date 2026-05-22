import type { NpcType } from '@/Types/Npc.type'

export type TileType = {
  npc?: NpcType
  event?: string
  maxEnemies?: number

  possibleSpawns?: {
    [digimonId: string]: {
      spawnChance: number

      lootTable?: {
        [itemId: string]: {
          dropChance: number
          amount: number
        }
      }
    }
  }
}
