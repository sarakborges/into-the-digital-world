import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { MOCHIMON } from '@/GameData/Digimons'

export const MOCHIMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'MOCHIMON_RECIPE_FULL',
  digimon: MOCHIMON.id,

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
      type: 'core',
      quantity: 1
    },

    {
      id: ALL_CORES.metalEmpire.id,
      type: 'core',
      quantity: 1
    }
  ]
}

export const MOCHIMON_RECIPE_NSP: CompositionRecipeType = {
  id: 'MOCHIMON_COMPOSE_NSP',
  digimon: MOCHIMON.id,

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const MOCHIMON_RECIPE_ME: CompositionRecipeType = {
  id: 'MOCHIMON_COMPOSE_ME',
  digimon: MOCHIMON.id,

  ingredients: [
    {
      id: ALL_CORES.metalEmpire.id,
      type: 'core',
      quantity: 5
    }
  ]
}

export const MOCHIMON_RECIPES = [
  MOCHIMON_RECIPE_FULL,
  MOCHIMON_RECIPE_NSP,
  MOCHIMON_RECIPE_ME
]
