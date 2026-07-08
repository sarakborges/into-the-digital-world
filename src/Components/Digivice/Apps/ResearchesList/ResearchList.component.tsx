import { GiTwoCoins } from 'react-icons/gi'

import {
  getAvailableResearches,
  isResearchPurchasable,
  purchaseResearch
} from '@/Helpers/Systems/Profile'
import { getTranslation } from '@/Helpers/Language'

import { AllResearches } from '@/GameData/Researches'
import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'

import { ItemsList } from '@/Components/Global/ItemsList'

import './ResearchList.style.scss'

export const ResearchList = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const availableResearches = getAvailableResearches()

  return (
    <div className="research-list">
      {!!availableResearches.length && (
        <div className="research-list-container">
          <Text>{getTranslation('RESEARCH_002_TITLE')}</Text>

          <div className="list">
            {availableResearches.map((research) => (
              <div className="research" key={`research-${research}`}>
                <header>
                  <div className="digimon-info">
                    <Portrait
                      alt={AllDigimons[research].name}
                      src={`/${AllDigimons[research].portrait}.webp`}
                    />

                    <Text>{AllDigimons[research].name}</Text>
                  </div>

                  <Button
                    onClick={() => purchaseResearch(research)}
                    style="secondary"
                    disabled={!isResearchPurchasable(research)}
                  >
                    <GiTwoCoins />
                  </Button>
                </header>

                <ItemsList
                  list={AllResearches[research].cost}
                  displayPlayerResouce
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
