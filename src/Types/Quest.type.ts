import type { CoresType } from '@/Types/Cores.type'

export type QuestObjectivesType = {
  id: string
  type: 'SPECIFIC_ENEMY'
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
  rewards?: {
    exp?: number
    currency?: number
    items?: Array<string>
    cores?: { [k: string]: number }
    updatedRegion?: string
  }
}
