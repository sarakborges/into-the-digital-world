import { TbListDetails } from 'react-icons/tb'
import { FaCheck } from 'react-icons/fa'

import { AllQuests } from '@/GameData/Quests'

import {
  getQuestObjectives,
  getQuestObjectiveText
} from '@/Helpers/Systems/Quests'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'

import { setCurrentDetails } from '@/Helpers/Systems/Digivice'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import './QuestsList.style.scss'

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
                <Text>{AllQuests[quest].name}</Text>

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
