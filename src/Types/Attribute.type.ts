export type AttributeId = 'va' | 'vi' | 'da' | 'na'

export type AttributeType = Record<
  AttributeId,
  {
    id: AttributeId
    name: string
  }
>
