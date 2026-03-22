import type { CompositionRecipeType } from '@/Types/Composition.type'

import { ALL_CORES } from '@/Consts/Cores.const'

import { AGUMON } from '@/GameData/Digimons'

export const AGUMON_RECIPE_FULL: CompositionRecipeType = {
  id: 'AGUMON_RECIPE_FULL',
  digimon: AGUMON.id,

  ingredients: [
    {
      id: 'KOROMON',
      type: 'core',
      quantity: 1
    },

    {
      id: ALL_CORES.dragonsRoar.id,
      type: 'core',
      quantity: 1
    },

    {
      id: ALL_CORES.virusBusters.id,
      type: 'core',
      quantity: 1
    }
  ]
}

export const AGUMON_RECIPES = [AGUMON_RECIPE_FULL]
