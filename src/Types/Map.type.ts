import type { WildDigimonType } from './Digimon.type'
import type { NpcType } from './Npc.type'

export const MapTypes = {
  COMBAT: 'COMBAT',
  COMMERCE: 'COMMERCE',
  QUEST: 'QUEST',
  QUEST_REPEATABLE: 'QUEST_REPEATABLE',
  BOSS: 'BOSS',
  EVENT: 'EVENT'
}

export type MapType = {
  id: string
  name: string
  type: Array<(typeof MapTypes)[keyof typeof MapTypes]>
  maxEnemiesPerEncounter?: number
  enemyLevelRange?: {
    min: number
    max: number
  }
  bossLevel?: number

  wildDigimons?: Array<WildDigimonType>
  availableNpcs?: Array<NpcType>
}

export type RegionType = {
  id: string
  name: string
  maps: Array<MapType>
  questRequired?: string
}
