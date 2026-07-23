import { AiOutlineSelect } from 'react-icons/ai'

import { getResearch } from '@/GameData/Registries/Research.registry'
import { Compose003 } from '@/GameData/Scenes/Apps/Compose/003.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { getAvailableCompositions } from '@/Helpers/Systems/Compose/getAvailableCompositions.helper'

import { useCompositionStore } from '@/Stores/Composition.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Digivice/Apps/AppCompose/List/CompositionsList.style.scss'

export const CompositionsList = () => {
  const { profile } = useProfileStore((state) => state)
  const { setComposition } = useCompositionStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!profile) {
    return
  }

  const availableCompositions = getAvailableCompositions(profile)

  if (!availableCompositions.length) {
    return <Text as="p">{getTexts('COMPOSE_002_NO_RESEARCHES')}</Text>
  }

  return (
    <div className="composition-list">
      {!!availableCompositions.length && (
        <div className="composition-list-container">
          <Text>{getTexts('COMPOSE_002_TITLE')}</Text>

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
                      const research = getResearch(baseDigimon.id)
                      const totalItems: Record<string, number> = {}
                      const requiredItems = research.requiredItems
                      const optionalItems = research.optionalItems

                      for (const item in requiredItems) {
                        totalItems[item] =
                          (totalItems[item] || 0) + requiredItems[item]
                      }

                      for (const item in optionalItems) {
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

                      setScene({ component: Compose003 })
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
