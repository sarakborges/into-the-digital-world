import type { SpawnableDigimonType } from '@/Types/SpawnableDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'
import { AllItems } from '@/GameData/Items'

export const RootDomainDorimon: {
  [digimonId: string]: SpawnableDigimonType
} = {
  [AllDigimons.dorimon.id]: {
    digimonId: AllDigimons.dorimon.id,
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
}
