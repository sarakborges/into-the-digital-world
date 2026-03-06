import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'
import { CompositionContext } from '@/Contexts/Composition.context'

import { COMPOSABLE_DIGIMONS } from '@/GameData/Digimons'

import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { DetailedDigimonCard } from '@/Components/App/DetailedDigimonCard'

import './Compose.style.scss'
import { ComposeRecipe } from '@/Components/App/ComposeRecipe'
import { Portrait } from '@/Components/System/Portrait'

export const ComposeTemplate = () => {
  const profileContext = useContext(ProfileContext)
  const compositionContext = useContext(CompositionContext)

  if (!profileContext || !compositionContext) {
    return
  }

  const { profile } = profileContext
  const { baseDigimon, setBaseDigimon } = compositionContext

  const seenDigimons = Object.values(COMPOSABLE_DIGIMONS)
    .filter((digimonItem) => profile.seenDigimon?.includes(digimonItem.id))
    .sort((a, b) => (a.name > b.name ? 1 : -1))

  return (
    <MenuWrapper>
      <main className="compose-template">
        <header className="compose-header">
          <Typography as="h1">{getTexts('COMPOSE_TITLE')}</Typography>
          <Typography as="h2">{getTexts('COMPOSE_SUBTITLE')}</Typography>
        </header>

        <main className="compose-body">
          <aside className="digimon-list">
            {seenDigimons.map((digimonItem) => (
              <div key={`compose-digimons-${digimonItem.id}`}>
                <button
                  onClick={() => setBaseDigimon(digimonItem)}
                  className={
                    baseDigimon?.id === digimonItem.id ? 'selected' : ''
                  }
                >
                  <DetailedDigimonCard digimon={digimonItem} />
                </button>
              </div>
            ))}
          </aside>

          {!!baseDigimon && (
            <main className="digimon-recipes">
              <div className="recipes-body">
                <header>
                  <Portrait
                    src={`/digimon_portraits/${baseDigimon.id}.jpg`}
                    alt={`Starter digimon: ${baseDigimon.name}`}
                    size="xs"
                  />

                  <main>
                    <Typography as="h2">
                      {getTexts('COMPOSE_DIGIMON_RECIPE_TITLE').replace(
                        '[NAME]',
                        baseDigimon.name
                      )}
                    </Typography>

                    <Typography>
                      {getTexts('COMPOSE_DIGIMON_RECIPE_SUBTITLE')}
                    </Typography>
                  </main>
                </header>

                <main>
                  {baseDigimon.composeRecipe?.map((recipeItem) => (
                    <ComposeRecipe
                      key={`${baseDigimon.name}-compose-${recipeItem.id}`}
                      recipe={recipeItem}
                    />
                  ))}
                </main>
              </div>
            </main>
          )}
        </main>
      </main>
    </MenuWrapper>
  )
}
