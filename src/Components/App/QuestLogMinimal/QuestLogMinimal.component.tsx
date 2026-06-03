import { AllQuests } from '@/GameData/Quests'
import { AllNpcs } from '@/GameData/Npcs'
import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import './QuestLogMinimal.style.scss'
import { getTexts } from '@/Helpers/getTexts.helper'

export const QuestLogMinimal = () => {
  const { profile } = useProfileStore((state) => state)

  if (!Object.keys(profile!.quests.current ?? {})?.length) {
    return
  }

  return (
    <div className="quest-log-minimal">
      <Text>{getTexts('QUESTS_LOG_TITLE')}</Text>

      {Object.keys(profile!.quests.current ?? {})?.map((quest, questIndex) => (
        <div className="quest">
          <header>
            <Text>{questIndex + 1}: </Text>
            <Text>{AllQuests[quest].name}</Text>
          </header>

          {Object.values(AllQuests[quest].objectives ?? {})?.map(
            (objective) => (
              <main>
                <Text>
                  {getTexts('QUEST_OBJECTIVE')
                    .replaceAll(
                      '[TYPE]',
                      getTexts(
                        `QUEST_OBJECTIVE_TYPE_${objective.type.toLocaleUpperCase()}`
                      )
                    )
                    .replaceAll(
                      '[TARGET]',
                      AllNpcs[objective.target.type][objective.target.id].name
                    )
                    .replaceAll('[WHERE]', AllZones[objective.where].name)}
                </Text>
              </main>
            )
          )}
        </div>
      ))}
    </div>
  )
}
