import type { ItemId } from '@/GameData/Registries/Item.registry'

export type LootTableEntryType = {
  itemId: string
  dropChance: number
  amount: number
}

export type LootTableEntryDefinitionType = Omit<
  LootTableEntryType,
  'itemId'
> & {
  itemId: ItemId
}

export type LootType = Record<string, number>
