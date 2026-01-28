import type { PartnerDigimonType } from '@/Types/Digimon.type'
import type { ItemType } from '@/Types/Item.type'
import type { QuestObjectivesType } from '@/Types/Quest.type'
import type { CoreLootType } from '@/Types/Battle.type'

export type ProfileType = {
  name?: string
  money?: number
  experience?: number
  points?: number
  level?: number
  avatar?: string

  partners?: Array<PartnerDigimonType>
  party?: Array<number>
  items?: Array<ItemType>
  completedQuests?: Array<string>
  seenDigimon?: Array<string>
  cores: Array<CoreLootType>

  activeQuests?: Array<{
    questId: string
    progress: Array<QuestObjectivesType>
  }>
}
