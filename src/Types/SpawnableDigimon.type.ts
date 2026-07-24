import type { EquipmentType } from '@/Types/Equipment.type'
import type {
  LootTableEntryDefinitionType,
  LootTableEntryType
} from '@/Types/Loot.type'

export type SpawnableDigimonType = {
  digimonId: string
  spawnChance: number
  equipments: EquipmentType
  lootTable?: Array<LootTableEntryType>
}

export type SpawnableDigimonDefinitionType = Omit<
  SpawnableDigimonType,
  'lootTable'
> & {
  lootTable?: Array<LootTableEntryDefinitionType>
}
