import {
  getQuest,
  getQuestObjective
} from '@/GameData/Registries/Quest.registry'

import { isObjectiveDone } from '@/Helpers/Systems/Quests/isObjectiveDone.helper'

export const getQuestObjectives = (questId: string) =>
  Object.keys(getQuest(questId).objectives ?? {})
    ?.map((objectiveId) => ({
      id: objectiveId,
      ...getQuestObjective({ questId: questId, objectiveId: objectiveId }),
      isDone: isObjectiveDone({
        objectiveId,
        questId
      })
    }))
    .sort((a) => (a.isDone ? 1 : -1))
