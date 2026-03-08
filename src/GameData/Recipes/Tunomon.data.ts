import type { CompositionRecipeType } from '@/Types/Composition.type'
import { ALL_CORES } from '@/Consts/Cores.const'

export const TUNOMON_COMPOSE_FULL: CompositionRecipeType = {
  id: 'TUNOMON_COMPOSE_FULL',

  ingredients: [
    {
      id: ALL_CORES.natureSpirits.id,
      type: 'family',
      quantity: 5
    }
  ]
}

export const TUNOMON_RECIPES = [TUNOMON_COMPOSE_FULL]
