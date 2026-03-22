import type { IngredientsType } from '@/Types/Ingredients.type'

export type CompositionRecipeType = {
  id: string
  digimon: string
  ingredients?: Array<IngredientsType>
}
