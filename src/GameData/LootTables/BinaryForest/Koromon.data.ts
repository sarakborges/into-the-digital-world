import type { LootTableType } from '@/Types/Digimon.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import {
  RESEARCH_KOROMON_RECIPE_FULL,
  RESEARCH_KOROMON_RECIPE_CORE,
  RESEARCH_KOROMON_RECIPE_DR,
  RESEARCH_KOROMON_RECIPE_VB
} from '@/GameData/Researches'

import { KOROMON } from '@/GameData/Digimons'

export const BINARY_FOREST_KOROMON_LOOT_TABLE: Array<LootTableType> = [
  {
    type: 'core',
    id: ALL_CORES.dragonsRoar.id,
    maxQuantity: 1,
    dropChance: 30
  },

  {
    type: 'core',
    id: ALL_CORES.virusBusters.id,
    maxQuantity: 1,
    dropChance: 30
  },

  {
    type: 'core',
    id: KOROMON.id,
    dropChance: 3,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: RESEARCH_KOROMON_RECIPE_FULL.id,
    dropChance: 5,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: RESEARCH_KOROMON_RECIPE_DR.id,
    dropChance: 5,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: RESEARCH_KOROMON_RECIPE_VB.id,
    dropChance: 5,
    maxQuantity: 1
  },

  {
    type: 'research',
    id: RESEARCH_KOROMON_RECIPE_CORE.id,
    dropChance: 5,
    maxQuantity: 1
  }
]
