import { GiTwoCoins } from 'react-icons/gi'

import { getDigimon } from '@/GameData/Registries/Digimon.registry'
import { getResearch } from '@/GameData/Registries/Research.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { getAvailableResearches } from '@/Helpers/Systems/Profile/getAvailableResearches.helper'
import { isResearchPurchasable } from '@/Helpers/Systems/Profile/isResearchPurchasable.helper'
import { purchaseResearch } from '@/Helpers/Systems/Profile/purchaseResearch.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Digivice/Apps/ResearchesList/ResearchList.style.scss'
import { ItemsList } from '@/Components/Global/ItemsList/ItemsList.component'

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
