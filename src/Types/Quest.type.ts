import type { QuestObjectiveType } from '@/Types/QuestObjective.type'

export type QuestType = {
  id: string

  objectives: {
    [objectiveId: string]: QuestObjectiveType
  }
}
