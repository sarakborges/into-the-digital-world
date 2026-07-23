import { QuestRegistry } from '@/GameData/Quests'

export type QuestId = keyof typeof QuestRegistry
export type Quest = (typeof QuestRegistry)[QuestId]
type ObjectiveOf<T> = T extends {
  objectives: Record<string, infer Objective>
}
  ? Objective
  : never

export type QuestObjective = ObjectiveOf<Quest>

type GetQuestObjectiveParams = {
  questId: string
  objectiveId: string
}

export const findQuest = (questId: string): Quest | undefined => {
  return QuestRegistry[questId as QuestId] as Quest | undefined
}

export const getQuest = (questId: string): Quest => {
  const quest = findQuest(questId)

  if (!quest) {
    throw new Error(`Unknown quest: ${questId}`)
  }

  return quest
}

export const getQuestObjective = ({
  questId,
  objectiveId
}: GetQuestObjectiveParams): QuestObjective => {
  const objectives = getQuest(questId).objectives as Record<
    string,
    QuestObjective
  >
  const objective = objectives[objectiveId]

  if (!objective) {
    throw new Error(`Unknown quest objective: ${questId}.${objectiveId}`)
  }

  return objective
}
