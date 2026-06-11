export type ItemType = {
  id: string
  name: string
  portrait: string
  category: 'keyItem' | 'equipment' | 'general' | 'core'

  equipConditions?: () => boolean

  equipmentBonuses?: {
    stats?: {
      [statId: string]: {
        type: 'percentage' | 'fixed'
        amount: number
      }
    }
  }
}
