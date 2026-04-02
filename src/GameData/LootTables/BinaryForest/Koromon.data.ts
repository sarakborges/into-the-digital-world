import type { LootTableType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { KOROMON } from '@/GameData/Digimons'

export const BINARY_FOREST_KOROMON_LOOT_TABLE: Array<LootTableType> = [
  {
    type: 'core',
    id: ALL_CORES.dragonsRoar.id,
    maxQuantity: 1,
    dropChance: 100
  },

  {
    type: 'core',
    id: ALL_CORES.dragonsRoar.id,
    maxQuantity: 1,
    dropChance: 50
  },

  {
    type: 'core',
    id: ALL_CORES.dragonsRoar.id,
    maxQuantity: 1,
    dropChance: 10
  },

  {
    type: 'core',
    id: ALL_CORES.virusBusters.id,
    maxQuantity: 1,
    dropChance: 100
  },

  {
    type: 'core',
    id: ALL_CORES.virusBusters.id,
    maxQuantity: 1,
    dropChance: 50
  },

  {
    type: 'core',
    id: ALL_CORES.virusBusters.id,
    maxQuantity: 1,
    dropChance: 10
  },

  {
    type: 'core',
    id: KOROMON.id,
    dropChance: 3,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: KOROMON.id,
    dropChance: 5,
    maxQuantity: 1
  }
]
