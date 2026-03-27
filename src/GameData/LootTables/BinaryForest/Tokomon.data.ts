import type { LootTableType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { TOKOMON } from '@/GameData/Digimons'

export const BINARY_FOREST_TOKOMON_LOOT_TABLE: Array<LootTableType> = [
  {
    type: 'core',
    id: ALL_CORES.virusBusters.id,
    maxQuantity: 1,
    dropChance: 30
  },

  {
    type: 'core',
    id: ALL_CORES.windGuardians.id,
    maxQuantity: 1,
    dropChance: 30
  },

  {
    type: 'core',
    id: TOKOMON.id,
    dropChance: 3,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: TOKOMON.id,
    dropChance: 5,
    maxQuantity: 1
  }
]
