import type { PartnerDigimonType } from '@/Types/Digimon.type'
import type { ItemType } from '@/Types/Item.type'
import type { QuestObjectivesType } from '@/Types/Quest.type'

export type ProfileType = {
  name: string
  currency: number
  points: number
  avatar: string

  partners: Array<PartnerDigimonType>
  party: Array<string>
  researches: Array<string>
  templates: Array<string>
  items: Array<ItemType>

  cores: {
    [k: string]: number
  }

  quests: {
    completed?: Array<string>

    inProgress?: Array<{
      questId: string
      progress: Array<QuestObjectivesType>
    }>
  }
}
