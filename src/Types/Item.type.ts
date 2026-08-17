export type ItemType = {
  id: string
  name: string
  picture: string
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
