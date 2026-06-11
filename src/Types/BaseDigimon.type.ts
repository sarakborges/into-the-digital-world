export type BaseDigimonType = {
  id: string
  name: string
  description: string
  fullImage: string
  portrait: string
  equipmentsSlots?: number

  attribute: 'va' | 'vi' | 'da' | 'na'

  families: {
    [familyId: string]: null
  }

  attacks: {
    [attackId: string]: null
  }

  stats: {
    vit: number
    pow: number
    res: number
    tec: number
    agi: number
  }
}
