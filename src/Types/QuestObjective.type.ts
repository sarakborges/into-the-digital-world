export type QuestObjectiveType = {
  type: 'interact' | 'defeatInZone' | 'defeatSpecific'

  target: {
    id: string
    type: 'general' | 'digimon' | 'appmon' | 'event'
  }

  where: string
  map: string

  amount?: number
}
