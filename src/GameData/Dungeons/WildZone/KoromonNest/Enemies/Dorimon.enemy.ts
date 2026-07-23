import { DigimonDorimon } from '@/GameData/Digimons/Dorimon.digimon'
import { AllItems } from '@/GameData/Items'

export const WildZoneDorimon = {
  digimonId: DigimonDorimon.id,
  spawnChance: 10,

  equipments: {},

  lootTable: [
    {
      itemId: AllItems.dorimonCore.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: AllItems.dorimonCore.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: AllItems.dorimonCore.id,
      dropChance: 10,
      amount: 1
    },

    {
      itemId: AllItems.natureSpiritsCore.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: AllItems.natureSpiritsCore.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: AllItems.natureSpiritsCore.id,
      dropChance: 10,
      amount: 1
    }
  ]
}
