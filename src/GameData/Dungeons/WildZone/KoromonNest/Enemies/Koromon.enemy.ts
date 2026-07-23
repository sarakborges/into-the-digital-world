import type { SpawnableDigimonType } from '@/Types/SpawnableDigimon.type'

import { DigimonKoromon } from '@/GameData/Digimons/Koromon.digimon'
import { DragonsRoarCoreItem } from '@/GameData/Items/DragonsRoarCore.item'
import { EquipmentDrAllItem } from '@/GameData/Items/EquipmentDrAll.item'
import { KoromonCoreItem } from '@/GameData/Items/KoromonCore.item'
import { VirusBustersCoreItem } from '@/GameData/Items/VirusBustersCore.item'

export const WildZoneKoromon: SpawnableDigimonType = {
  digimonId: DigimonKoromon.id,
  spawnChance: 10,

  equipments: {},

  lootTable: [
    {
      itemId: EquipmentDrAllItem.id,
      dropChance: 10,
      amount: 1
    },

    {
      itemId: KoromonCoreItem.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: KoromonCoreItem.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: KoromonCoreItem.id,
      dropChance: 10,
      amount: 1
    },

    {
      itemId: DragonsRoarCoreItem.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: DragonsRoarCoreItem.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: DragonsRoarCoreItem.id,
      dropChance: 10,
      amount: 1
    },

    {
      itemId: VirusBustersCoreItem.id,
      dropChance: 100,
      amount: 1
    },

    {
      itemId: VirusBustersCoreItem.id,
      dropChance: 25,
      amount: 1
    },

    {
      itemId: VirusBustersCoreItem.id,
      dropChance: 10,
      amount: 1
    }
  ]
}
