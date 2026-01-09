import type { ItemType } from '@/Types/Item.type'
import type { QuestType } from '@/Types/Quest.type'

export const InteractionsTypes = {
  COMMERCE: `COMMERCE`,
  QUEST: `QUEST`,
  DIALOG: `DIALOG`
}

export type InteractionsType =
  (typeof InteractionsTypes)[keyof typeof InteractionsTypes]

export type InteractionType = {
  id: string
  type: InteractionsType
  questId?: string
  questDetails?: QuestType
}

export type NpcType = {
  id: string
  name: string
  welcomeText?: string
  types: InteractionsType[]
  itemsSold?: ItemType[]
  interactions: InteractionType[]
}
