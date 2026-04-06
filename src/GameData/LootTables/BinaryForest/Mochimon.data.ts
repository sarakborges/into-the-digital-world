import type { LootTableType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { MOCHIMON } from '@/GameData/Digimons'

export const BINARY_FOREST_MOCHIMON_LOOT_TABLE: Array<LootTableType> = [
  {
    type: 'core',
    id: ALL_CORES.metalEmpire.id,
    maxQuantity: 1,
    dropChance: 100
  },

  {
    type: 'core',
    id: ALL_CORES.metalEmpire.id,
    maxQuantity: 1,
    dropChance: 50
  },

  {
    type: 'core',
    id: ALL_CORES.metalEmpire.id,
    maxQuantity: 1,
    dropChance: 10
  },

  {
    type: 'core',
    id: ALL_CORES.natureSpirits.id,
    maxQuantity: 1,
    dropChance: 100
  },

  {
    type: 'core',
    id: ALL_CORES.natureSpirits.id,
    maxQuantity: 1,
    dropChance: 50
  },

  {
    type: 'core',
    id: ALL_CORES.natureSpirits.id,
    maxQuantity: 1,
    dropChance: 10
  },

  {
    type: 'core',
    id: ALL_CORES.noAttribute.id,
    maxQuantity: 1,
    dropChance: 100
  },

  {
    type: 'core',
    id: ALL_CORES.noAttribute.id,
    maxQuantity: 1,
    dropChance: 50
  },

  {
    type: 'core',
    id: ALL_CORES.noAttribute.id,
    maxQuantity: 1,
    dropChance: 10
  },

  {
    type: 'core',
    id: MOCHIMON.id,
    dropChance: 3,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: MOCHIMON.id,
    dropChance: 5,
    maxQuantity: 1
  }
]
