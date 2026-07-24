import type { SpawnableDigimonDefinitionType } from '@/Types/SpawnableDigimon.type'

import { DigimonDorimon } from '@/GameData/Digimons/Dorimon.digimon'
import { DorimonCoreItem } from '@/GameData/Items/DorimonCore.item'
import { NatureSpiritsCoreItem } from '@/GameData/Items/NatureSpiritsCore.item'

export const WildZoneDorimon = {
  digimonId: DigimonDorimon.id,
  spawnChance: 10,

  equipments: {},

  lootTable: [
    {
      itemId: DorimonCoreItem.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: DorimonCoreItem.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: DorimonCoreItem.id,
      dropChance: 10,
      amount: 1
    },

    {
      itemId: NatureSpiritsCoreItem.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: NatureSpiritsCoreItem.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: NatureSpiritsCoreItem.id,
      dropChance: 10,
      amount: 1
    }
  ]
} satisfies SpawnableDigimonDefinitionType
