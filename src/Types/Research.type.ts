import type { ItemId } from '@/GameData/Registries/Item.registry'

type ResearchItems = Partial<Record<ItemId, number>>

export type ResearchType = {
  cost: ResearchItems
  requiredItems?: ResearchItems
  optionalItems?: ResearchItems
}
