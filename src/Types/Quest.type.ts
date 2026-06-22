import type {QuestObjectiveType} from '@/Types/QuestObjective.type'

export type QuestType = {
  id: string
  name?: string

  objectives: {
    [objectiveId: string]: QuestObjectiveType
  }
}
