import { AllQuests } from '@/GameData/Quests'

import { isObjectiveDone } from '@/Helpers/Systems/Quests'

export const getQuestObjectives = (questId: string) =>
  Object.keys(AllQuests[questId].objectives ?? {})
    ?.map((objectiveId) => ({
      id: objectiveId,
      ...AllQuests[questId].objectives[objectiveId],
      isDone: isObjectiveDone({
        objectiveId,
        questId
      })
    }))
    .sort((a) => (a.isDone ? 1 : -1))
