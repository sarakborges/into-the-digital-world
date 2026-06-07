import { GiTwoCoins } from 'react-icons/gi'

import { saveSession } from '@/Helpers/saveSession.helper'
import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllResearches } from '@/GameData/Researches'
import { AllDigimons } from '@/GameData/Digimons'
import { AllItems } from '@/GameData/Items'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'

import { ItemCore } from '@/Components/App/ItemCore'

import './ResearchList.style.scss'
import { ItemsList } from '../ItemsList'

export const ResearchList = () => {
  const { profile, setProfile } = useProfileStore((state) => state)

  const availableResearches = Object.keys(AllResearches)
    .filter((research) => !profile!.researches?.includes(research))
    .sort((a, b) => (a > b ? 1 : -1))

  const purchaseResearch = (research) => {
    const updatedProfile = {
      ...profile!,
      researches: [...(profile!.researches ?? []), research]
    }

    for (let item of Object.keys(AllResearches[research].cost)) {
      updatedProfile!.items[item] -= AllResearches[research].cost[item]
    }

    setProfile(updatedProfile)
    saveSession({ key: 'profile', value: updatedProfile })
  }

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
                          profile!.items[item] >=
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
