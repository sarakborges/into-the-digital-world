import { FaCheck } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'

import { getQuest } from '@/GameData/Registries/Quest.registry'

import { setCurrentDetails } from '@/Helpers/Systems/Digivice/setCurrentDetails.helper'
import { getQuestObjectiveText } from '@/Helpers/Systems/Quests/getQuestObjectiveText.helper'
import { getQuestObjectives } from '@/Helpers/Systems/Quests/getQuestObjectives.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Global/QuestsList/QuestsList.style.scss'

export const QuestsList = ({
  list,
  title,
  noListText
}: {
  list: Array<string>
  title?: string
  noListText: string
}) => {
  const { digivice } = useDigiviceStore((state) => state)

  if (!digivice) {
    return
  }

  return (
    <div className="quests-list">
      <header>
        <Text>{title}</Text>
      </header>

      {!list.length && <Text>{noListText}</Text>}

      {!!list.length && (
        <>
          {list.map((quest) => (
            <div className="quest" key={`quests-${quest}`}>
              <header>
                <Text>{getQuest(quest).name}</Text>

                <Button
                  onClick={() =>
                    setCurrentDetails(
                      digivice?.currentDetails !== quest ? quest : undefined
                    )
                  }
                >
                  <TbListDetails />
                </Button>
              </header>

              {digivice?.currentDetails === quest && (
                <>
                  {getQuestObjectives(quest).map((objective) => (
                    <main
                      key={`quests-${quest}-objectives-${objective.id}`}
                      data-isdone={objective.isDone}
                    >
                      {objective.isDone && <FaCheck />}

                      <Text>{getQuestObjectiveText(objective)}</Text>
                    </main>
                  ))}
                </>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  )
}
