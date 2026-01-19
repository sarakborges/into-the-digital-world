import type { PartnerDigimonType } from '@/Types/Digimon.type'
import type { ItemType } from '@/Types/Item.type'
import type { QuestObjectivesType } from '@/Types/Quest.type'
import type { CoresType } from '@/Types/Cores.type'

export type ProfileType = {
  name?: string
  money?: number
  experience?: number
  points?: number
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

  cores: CoresType
}
