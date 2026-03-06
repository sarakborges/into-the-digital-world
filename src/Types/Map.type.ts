import type { EnemyDigimonType } from './Digimon.type'
import type { NpcType } from './Npc.type'

export const MapTypes = {
  COMBAT: 'COMBAT',
  COMMERCE: 'COMMERCE',
  QUEST: 'QUEST',
  QUEST_REPEATABLE: 'QUEST_REPEATABLE',
  EVENT: 'EVENT'
}

export type MapType = {
  id: string
  name: string
  description: string
  types: Array<(typeof MapTypes)[keyof typeof MapTypes]>
  maxEnemiesPerEncounter?: number
  enemyLevelRange?: {
    min: number
    max: number
  }
  eliteLevelRange?: {
    min: number
    max: number
  }

  enemyDigimons?: Array<EnemyDigimonType>
  eliteDigimons?: Array<EnemyDigimonType>
  availableNpcs?: Array<NpcType>
}

export type RegionType = {
  id: string
  name: string
  maps: Array<MapType>
  questRequired?: string
}
