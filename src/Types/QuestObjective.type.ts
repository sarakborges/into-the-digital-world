export type QuestObjectiveType = {
  type: 'interact' | 'defeatInZone' | 'defeatSpecific'
  target: string
  amount?: number
}
