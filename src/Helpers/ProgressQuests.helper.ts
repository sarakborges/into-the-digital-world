import type { CombatLogType } from '@/Types/Battle.type'
import type { PartyDigimon } from '@/Types/Digimon.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { QuestObjectivesType, QuestType } from '@/Types/Quest.type'

import { ALL_QUESTS } from '@/GameData/Quests'

export const progressQuests = (
  target: PartyDigimon
):
  | {
      entries: CombatLogType
      quests: Array<{
        questId: string
        progress: Array<QuestObjectivesType>
      }>
    }
  | undefined => {
  if (target.party !== 'enemy') {
    return
  }

  const entries: CombatLogType = []

  const profile = JSON.parse(localStorage.getItem('profile')!) as ProfileType

  if (!profile.activeQuests?.length) {
    return
  }

  for (let quest of profile.activeQuests) {
    const questData: QuestType = ALL_QUESTS[quest.questId]

    for (let objective of questData.objectives) {
      const objectiveProgress = quest.progress.find(
        (progressItem) => progressItem.id === objective.id
      )

      if (
        objectiveProgress &&
        objective.type === 'SPECIFIC_ENEMY' &&
        objective.enemyId === target?.id &&
        objectiveProgress.quantity < objective.quantity
      ) {
        quest.progress = quest.progress?.map((progressItem) => {
          if (progressItem.id !== objective.id) {
            return progressItem
          }

          return { ...progressItem, quantity: progressItem.quantity + 1 }
        })

        entries.push({
          party: 'player',
          text: `The quest "${questData.name}" has progressed (${objectiveProgress.text}: ${objectiveProgress.quantity + 1} / ${objective.quantity}).`
        })
      }
    }
  }

  return { entries, quests: profile.activeQuests }
}
