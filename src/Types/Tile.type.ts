import type { NpcType } from '@/Types/Npc.type'

export type TileType = {
  npc?: NpcType
  event?: string
  maxEnemies?: number

  possibleSpawns?: Array<{
    id: string
    spawningChance: number
  }>
}
