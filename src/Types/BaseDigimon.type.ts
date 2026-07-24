import type { AttributeId } from '@/Types/Attribute.type'
import type { FamilyId } from '@/Types/Family.type'

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

  attribute: AttributeId

  families: Partial<Record<FamilyId, null>>

  attacks: {
    [attackId: string]: null
  }

  stats: DigimonStatsType
}
