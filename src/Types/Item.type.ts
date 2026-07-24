import type { DigimonStatId } from '@/Types/BaseDigimon.type'

export type ItemType = {
  id: string
  name: string
  portrait: string
  category: 'keyItem' | 'equipment' | 'general' | 'core'

  equipConditions?: () => boolean

  equipmentBonuses?: {
    stats?: Partial<
      Record<
        DigimonStatId,
        {
          type: 'percentage' | 'fixed'
          amount: number
        }
      >
    >
  }
}
