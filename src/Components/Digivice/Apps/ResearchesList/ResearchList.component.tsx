import { GiTwoCoins } from 'react-icons/gi'

import { getDigimon } from '@/GameData/Registries/Digimon.registry'
import { getResearch } from '@/GameData/Registries/Research.registry'

import { getTexts } from '@/Helpers/Language'
import {
  getAvailableResearches,
  isResearchPurchasable,
  purchaseResearch
} from '@/Helpers/Systems/Profile'

import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import '@/Components/Digivice/Apps/ResearchesList/ResearchList.style.scss'
import { ItemsList } from '@/Components/Global/ItemsList'

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
          <Text>{getTexts('RESEARCH_002_TITLE')}</Text>

          <div className="list">
            {availableResearches.map((researchId) => {
              const digimon = getDigimon(researchId)
              const research = getResearch(researchId)

              return (
                <div className="research" key={`research-${researchId}`}>
                  <header>
                    <div className="digimon-info">
                      <Portrait
                        alt={digimon.name}
                        src={`/${digimon.portrait}.webp`}
                      />

                      <Text>{digimon.name}</Text>
                    </div>

                    <Button
                      onClick={() => purchaseResearch(researchId)}
                      disabled={!isResearchPurchasable(researchId)}
                    >
                      <GiTwoCoins />
                    </Button>
                  </header>

                  <ItemsList list={research.cost} displayPlayerResouce />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
