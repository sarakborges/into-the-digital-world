import type { ItemType } from '@/Types/Item.type'
import type { QuestType } from '@/Types/Quest.type'

export const InteractionTypes = {
  COMMERCE: `COMMERCE`,
  QUEST: `QUEST`,
  DIALOG: `DIALOG`
}

export type InteractionType =
  (typeof InteractionTypes)[keyof typeof InteractionTypes]

export type NpcType = {
  id: string
  name: string
  welcomeText?: string
  types: InteractionType[]
  itemsSold?: ItemType[]
  questsOffered?: QuestType[]

  interactionsPerZone: {
    [zoneName: string]: InteractionType[]
  }
}
