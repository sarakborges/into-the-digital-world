export type CompositionRecipeType = {
  id: string

  items?: Array<{
    id: string
    quantity: number
  }>

  cores?: Array<{
    id: string
    type: 'attribute' | 'family'
    quantity: number
  }>
}
