import type { PartnerDigimonType } from './Digimon.type'
import type { ItemType } from './Item.type'

export type ProfileType = {
  name?: string
  money?: number
  experience?: number
  level?: number
  avatar?: string

  partners?: PartnerDigimonType[]
  party?: number[]
  items?: ItemType[]
  completedQuests?: string[]
  seenDigimon?: string[]

  activeQuests?: {
    questId: string
    progress?: [
      {
        type: 'ENEMY_KILLS'
        enemyId?: string
        quantityKilled: number
      }
    ]
  }[]

  cores?: {
    [k in 'family' | 'attribute']: {
      [k: string]: number
    }
  }
}
