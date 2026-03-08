import type { IngredientsType } from '@/Types/Ingredients.type'

export type CompositionRecipeType = {
  id: string
  ingredients?: Array<IngredientsType>
}
