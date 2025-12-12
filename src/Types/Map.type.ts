import type { WildDigimonType } from './Digimon.type'
import type { ItemType } from './Item.type'
import type { NpcType } from './Npc.type'
import type { QuestType } from './Quest.type'

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

  wildDigimons?: WildDigimonType[]
  itemsSold?: ItemType[]
  questsOffered?: QuestType[]
  questsRequired?: string[]
  availableNpcs?: NpcType[]
}

export type RegionType = {
  id: string
  name: string
  maps: MapType[]
}
