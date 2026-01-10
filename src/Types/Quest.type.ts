export type QuestObjectivesType = {
  id: string
  type: 'ENEMY_KILLS'
  text: string
  enemyId?: string
  quantity: number
}

export type QuestType = {
  id: string
  name: string
  description: string
  completionText: string
  ongoingText: string
  objectives: QuestObjectivesType[]
  rewards?: []
}
