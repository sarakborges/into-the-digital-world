import {AllQuests} from '@/GameData/Quests'

import {isObjectiveDone} from '@/Helpers/Systems/Quests'

export const isQuestDone = (questId: string) => {
  return Object.keys(AllQuests[questId].objectives ?? {}).every((objective) => {
    return isObjectiveDone({
      objectiveId: objective,
      questId
    })
  })
}
