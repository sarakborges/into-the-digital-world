import type { LootTableType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { RESEARCH_TANEMON_RECIPE_FULL } from '@/GameData/Researches'

import { TANEMON } from '@/GameData/Digimons'

export const BINARY_FOREST_TANEMON_LOOT_TABLE: Array<LootTableType> = [
  {
    type: 'core',
    id: ALL_CORES.jungleTroopers.id,
    maxQuantity: 1,
    dropChance: 30
  },

  {
    type: 'core',
    id: TANEMON.id,
    dropChance: 3,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: RESEARCH_TANEMON_RECIPE_FULL.id,
    dropChance: 5,
    maxQuantity: 1
  }
]
