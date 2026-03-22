import type { LootTableType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { RESEARCH_NYAROMON_RECIPE_FULL } from '@/GameData/Researches'

import { NYAROMON } from '@/GameData/Digimons'

export const BINARY_FOREST_NYAROMON_LOOT_TABLE: Array<LootTableType> = [
  {
    type: 'core',
    id: ALL_CORES.virusBusters.id,
    maxQuantity: 1,
    dropChance: 30
  },

  {
    type: 'core',
    id: ALL_CORES.natureSpirits.id,
    maxQuantity: 1,
    dropChance: 30
  },

  {
    type: 'core',
    id: NYAROMON.id,
    dropChance: 3,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: RESEARCH_NYAROMON_RECIPE_FULL.id,
    dropChance: 5,
    maxQuantity: 1
  }
]
