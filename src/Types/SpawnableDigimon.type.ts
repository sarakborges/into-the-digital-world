import type { EquipmentType } from '@/Types/Equipment.type'

export type SpawnableDigimonType = {
  digimonId: string
  spawnChance: number
  equipments: EquipmentType

  lootTable?: Array<{
    itemId: string
    dropChance: number
    amount: number
  }>
}
