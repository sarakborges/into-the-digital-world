import type { QuestObjectiveType } from '@/Types/QuestObjective.type'

import { QuestRegistry } from '@/GameData/Quests'

export type QuestId = keyof typeof QuestRegistry
export type Quest = (typeof QuestRegistry)[QuestId]

type GetQuestObjectiveParams = {
  questId: string
  objectiveId: string
}

export const findQuest = (questId: string): Quest | undefined => {
  return Object.values(QuestRegistry).find((quest) => quest.id === questId)
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
}: GetQuestObjectiveParams): QuestObjectiveType => {
  const objective = Object.entries(getQuest(questId).objectives).find(
    ([registeredObjectiveId]) => registeredObjectiveId === objectiveId
  )?.[1]

  if (!objective) {
    throw new Error(`Unknown quest objective: ${questId}.${objectiveId}`)
  }

  return objective
}
