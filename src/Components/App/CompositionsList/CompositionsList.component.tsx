import { AiOutlineSelect } from 'react-icons/ai'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AvailableResearchesAtJijimon } from '@/GameData/Researches'
import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useCompositionStore } from '@/Stores/Composition.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'

import './CompositionsList.style.scss'

export const CompositionsList = () => {
  const { profile } = useProfileStore((state) => state)
  const { setComposition } = useCompositionStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const availableCompositions = Object.keys(AvailableResearchesAtJijimon)
    .filter((research) => profile!.researches?.includes(research))
    .map((research) => ({
      ...AvailableResearchesAtJijimon[research],
      baseDigimon: AllDigimons[research]
    }))
    .sort((a, b) => (a > b ? 1 : -1))

  if (!availableCompositions.length) {
    return <Text as="p">{getDialogs('COMPOSE_002_NO_RESEARCHES')}</Text>
  }

  return (
    <div className="composition-list">
      {!!availableCompositions.length && (
        <div className="composition-list-container">
          <Text>{getDialogs('COMPOSE_002_TITLE')}</Text>

          <div className="list">
            {availableCompositions.map((composition) => (
              <div
                className="composition"
                key={`composition-${composition.baseDigimon.name}`}
              >
                <header>
                  <div className="digimon-info">
                    <Portrait
                      alt={composition.baseDigimon.name}
                      src={`/${composition.baseDigimon.portrait}.webp`}
                    />

                    <Text>{composition.baseDigimon.name}</Text>
                  </div>

                  <Button
                    onClick={() => {
                      const baseDigimon = composition.baseDigimon
                      const totalItems = {}

                      const requiredItems =
                        AvailableResearchesAtJijimon[baseDigimon.id]
                          .requiredItems
                      const optionalItems =
                        AvailableResearchesAtJijimon[baseDigimon.id]
                          .optionalItems

                      for (let item in requiredItems) {
                        totalItems[item] =
                          (totalItems[item] || 0) + requiredItems[item]
                      }

                      for (let item in optionalItems) {
                        totalItems[item] =
                          (totalItems[item] || 0) + optionalItems[item]
                      }

                      setComposition({
                        baseDigimon: composition.baseDigimon,
                        totalItems:
                          !!Object.keys(requiredItems ?? {}).length ||
                          !!Object.keys(optionalItems ?? {}).length
                            ? totalItems
                            : {}
                      })

                      setScene({
                        currentScene: 'compose',
                        currentStage: '003'
                      })
                    }}
                  >
                    <AiOutlineSelect />
                  </Button>
                </header>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
