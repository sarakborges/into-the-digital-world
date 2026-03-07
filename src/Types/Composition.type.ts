export type CompositionRecipeType = {
  id: string

  ingredients?: Array<{
    id: string
    type: 'attribute' | 'family' | 'item'
    quantity: number
  }>
}
