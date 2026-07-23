export type DigimonStatsType = {
  vit: number
  pow: number
  res: number
  tec: number
  agi: number
}

export type DigimonStatId = keyof DigimonStatsType

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

  stats: DigimonStatsType
}
