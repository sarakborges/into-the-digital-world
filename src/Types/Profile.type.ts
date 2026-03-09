import type { PartnerDigimonType } from '@/Types/Digimon.type'
import type { ItemType } from '@/Types/Item.type'
import type { QuestObjectivesType } from '@/Types/Quest.type'
import type { ItemsLootType } from '@/Types/Battle.type'

export type ProfileType = {
  name: string
  currency: number
  experience: number
  points: number
  level: number
  avatar: string

  partners: Array<PartnerDigimonType>
  party: Array<string>
  researches: Array<string>
  items: Array<ItemType>
  cores: Array<ItemsLootType>

  quests: {
    completed?: Array<string>

    inProgress?: Array<{
      questId: string
      progress: Array<QuestObjectivesType>
    }>
  }
}
