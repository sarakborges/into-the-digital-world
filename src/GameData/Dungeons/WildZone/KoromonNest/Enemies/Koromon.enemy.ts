import type { SpawnableDigimonType } from '@/Types/SpawnableDigimon.type'

import { DigimonKoromon } from '@/GameData/Digimons/Koromon.digimon'
import { AllItems } from '@/GameData/Items'

export const WildZoneKoromon: SpawnableDigimonType = {
  digimonId: DigimonKoromon.id,
  spawnChance: 10,

  equipments: {},

  lootTable: [
    {
      itemId: AllItems.equipmentDrAll.id,
      dropChance: 10,
      amount: 1
    },

    {
      itemId: AllItems.koromonCore.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: AllItems.koromonCore.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: AllItems.koromonCore.id,
      dropChance: 10,
      amount: 1
    },

    {
      itemId: AllItems.dragonsRoarCore.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: AllItems.dragonsRoarCore.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: AllItems.dragonsRoarCore.id,
      dropChance: 10,
      amount: 1
    },

    {
      itemId: AllItems.virusBustersCore.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: AllItems.virusBustersCore.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: AllItems.virusBustersCore.id,
      dropChance: 10,
      amount: 1
    }
  ]
}
