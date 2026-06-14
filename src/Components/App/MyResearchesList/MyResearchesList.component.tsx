import { BiDetail } from 'react-icons/bi'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { AllResearches } from '@/GameData/Researches'
import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'

import { EncyclopediaHeader } from '@/Components/App/EncyclopediaHeader'
import { ItemsList } from '@/Components/App/ItemsList'

import './MyResearchesList.style.scss'

export const MyResearchesList = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  const allResearches = Object.values(profile?.researches!).map((research) => ({
    ...AllDigimons[research]
  }))

  const toggleDetails = (researchId: string) => {
    setDigivice({
      ...digivice!,
      currentDetails: digivice?.currentDetails ? undefined : researchId
    })
  }

  return (
    <div className="researches-list">
      <EncyclopediaHeader />

      {!allResearches.length && (
        <Text as="p">{getTexts('MY_RESEARCHES_EMPTY')}</Text>
      )}

      {!!allResearches.length && (
        <div className="researches">
          <Text>{getTexts('MY_RESEARCHES_TITLE')}</Text>

          {allResearches.map((research) => (
            <div className="research-content" key={`researches-${research.id}`}>
              <div className="research">
                <aside className="research-avatar">
                  <Portrait
                    alt={research.name}
                    src={`/${research.portrait}.webp`}
                  />
                </aside>

                <header className="research-name">
                  <Text>{research?.name}</Text>
                </header>

                <footer className="research-details">
                  <Button onClick={() => toggleDetails(research.id)}>
                    <BiDetail />
                  </Button>
                </footer>
              </div>

              {digivice?.currentDetails === research.id && (
                <>
                  <ItemsList
                    title={getTexts('MY_RESEARCHES_DETAILS_REQUIRED')}
                    list={AllResearches[research.id].requiredItems}
                  />

                  <ItemsList
                    title={getTexts('MY_RESEARCHES_DETAILS_OPTIONAL')}
                    list={AllResearches[research.id].optionalItems}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
