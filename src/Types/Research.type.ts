import type { ItemId } from '@/GameData/Registries/Item.registry'

type ResearchItems = {
  [itemId: string]: number
}

type RegisteredResearchItems = Partial<Record<ItemId, number>>

export type ResearchType = {
  cost: ResearchItems
  requiredItems?: ResearchItems
  optionalItems?: ResearchItems
}

export type ResearchDefinitionType = {
  cost: RegisteredResearchItems
  requiredItems?: RegisteredResearchItems
  optionalItems?: RegisteredResearchItems
}
