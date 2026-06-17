import { GiTwoCoins } from 'react-icons/gi'

import { getDialogs } from '@/Helpers/Language'
import { purchaseResearch } from '@/Helpers/Systems/Profile'

import { AllResearches } from '@/GameData/Researches'
import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/DesignSystem/Text'
import { Button } from '@/DesignSystem/Button'
import { Portrait } from '@/DesignSystem/Portrait'

import { ItemsList } from '@/Components/ItemsList'

import './ResearchList.style.scss'

export const ResearchList = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const availableResearches = Object.keys(AllResearches)
    .filter((research) => !profile.researches.includes(research))
    .sort((a, b) => (a > b ? 1 : -1))

  return (
    <div className="research-list">
      {!!availableResearches.length && (
        <div className="research-list-container">
          <Text>{getDialogs('RESEARCH_002_TITLE')}</Text>

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
                    disabled={
                      !Object.keys(AllResearches[research].cost).every(
                        (item) =>
                          profile.items[item] >=
                          AllResearches[research].cost[item]
                      )
                    }
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
