export type QuestObjectiveType = {
  type: 'interact' | 'defeatInZone' | 'defeatSpecific'

  target: {
    id: string
    type: 'general' | 'digimons'
  }

  where: string
  amount?: number
}
