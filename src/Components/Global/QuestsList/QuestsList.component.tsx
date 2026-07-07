import { FaCheck } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'

import { AllQuests } from '@/GameData/Quests'
import { AllNpcs } from '@/GameData/Npcs'
import { AllZones } from '@/GameData/Zones'

import { getTexts } from '@/Helpers/Language'
import {
  getQuestObjectives,
  getQuestObjectiveText
} from '@/Helpers/Systems/Quests'

import { Text } from '@/Components/DesignSystem/Text'
import { Button } from '@/Components/DesignSystem/Button'

import './QuestsList.style.scss'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { setCurrentDetails } from '@/Helpers/Systems/Digivice'

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
