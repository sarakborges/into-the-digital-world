import { BiDetail } from 'react-icons/bi'

import { AllResearches } from '@/GameData/Researches'

import { getTexts } from '@/Helpers/Language'
import { getResearches } from '@/Helpers/Systems/Profile'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import { EncyclopediaHeader } from '@/Components/Digivice/Apps/EncyclopediaHeader'
import { ItemsList } from '@/Components/Global/ItemsList'

import './AppResearchesList.style.scss'

export const AppResearchesList = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!digivice || !profile) {
    return
  }

  const allResearches = getResearches()

  const toggleDetails = (researchId: string) => {
    setDigivice({
      ...digivice,
      currentDetails: digivice.currentDetails ? undefined : researchId
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
                  <Text>{research.name}</Text>
                </header>

                <footer className="research-details">
                  <Button
                    style="secondary"
                    onClick={() => toggleDetails(research.id)}
                  >
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
