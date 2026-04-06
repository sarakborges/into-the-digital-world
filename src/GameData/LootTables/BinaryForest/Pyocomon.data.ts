import type { LootTableType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { PYOCOMON } from '@/GameData/Digimons'

export const BINARY_FOREST_PYOCOMON_LOOT_TABLE: Array<LootTableType> = [
  {
    type: 'core',
    id: ALL_CORES.jungleTroopers.id,
    maxQuantity: 1,
    dropChance: 100
  },

  {
    type: 'core',
    id: ALL_CORES.jungleTroopers.id,
    maxQuantity: 1,
    dropChance: 50
  },

  {
    type: 'core',
    id: ALL_CORES.jungleTroopers.id,
    maxQuantity: 1,
    dropChance: 10
  },

  {
    type: 'core',
    id: ALL_CORES.windGuardians.id,
    maxQuantity: 1,
    dropChance: 100
  },

  {
    type: 'core',
    id: ALL_CORES.windGuardians.id,
    maxQuantity: 1,
    dropChance: 50
  },

  {
    type: 'core',
    id: ALL_CORES.windGuardians.id,
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
    id: PYOCOMON.id,
    dropChance: 3,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: PYOCOMON.id,
    dropChance: 5,
    maxQuantity: 1
  }
]
