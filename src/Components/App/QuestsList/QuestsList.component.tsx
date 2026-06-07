import { FaCheck } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'

import { AllQuests } from '@/GameData/Quests'
import { AllNpcs } from '@/GameData/Npcs'
import { AllZones } from '@/GameData/Zones'

import { getTexts } from '@/Helpers/getTexts.helper'
import { isObjectiveDone } from '@/Helpers/isObjectiveDone.helper'

import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'

import './QuestsList.style.scss'
import { useDigiviceStore } from '@/Stores/Digivice.store'

export const QuestsList = ({
  list,
  title,
  noListText
}: {
  list: Array<string>
  title?: string
  noListText: string
}) => {
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  const seeDetails = (id) => {
    setDigivice({
      ...digivice!,
      currentDetails: id
    })
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

                <Button onClick={() => seeDetails(quest)}>
                  <TbListDetails />
                </Button>
              </header>

              {digivice?.currentDetails === quest && (
                <>
                  {Object.keys(AllQuests[quest].objectives ?? {})
                    ?.map((objective) => ({
                      id: objective,
                      ...AllQuests[quest].objectives[objective],

                      isDone: isObjectiveDone({
                        objectiveId: objective,
                        questId: quest
                      })
                    }))
                    .sort((a) => (a.isDone ? 1 : -1))
                    .map((objective) => (
                      <main
                        key={`quests-${quest}-objectives-${objective.id}`}
                        data-isdone={objective.isDone}
                      >
                        {objective.isDone && <FaCheck />}

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
                              AllNpcs[objective.target.type][
                                objective.target.id
                              ].name
                            )
                            .replaceAll(
                              '[WHERE]',
                              AllZones[objective.where].name
                            )}
                        </Text>
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
