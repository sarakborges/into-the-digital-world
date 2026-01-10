import type { PartnerDigimonType } from '@/Types/Digimon.type'
import type { ItemType } from '@/Types/Item.type'
import type { QuestObjectivesType } from '@/Types/Quest.type'

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
    progress?: QuestObjectivesType[]
  }[]

  cores?: {
    [k in 'family' | 'attribute']: {
      [k: string]: number
    }
  }
}
