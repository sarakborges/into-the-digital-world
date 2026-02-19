import { useContext, useEffect } from 'react'
import { useParams } from 'react-router'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'
import { CompositionContext } from '@/Contexts/Composition.context'

import { COMPOSABLE_DIGIMONS } from '@/GameData/Digimons'

import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { StarterDigimonCard } from '@/Components/App/StarterDigimonCard'
import { ComposeRecipe } from '@/Components/App/ComposeRecipe'

import './ComposeDigimon.style.scss'

export const ComposeDigimonTemplate = () => {
  const profileContext = useContext(ProfileContext)
  const compositionContext = useContext(CompositionContext)
  const { id } = useParams()

  if (!profileContext || !compositionContext || !id) {
    return
  }

  const upperId = id.toLocaleUpperCase()

  const { profile } = profileContext
  const { setBaseDigimon } = compositionContext

  const digimon = COMPOSABLE_DIGIMONS[upperId]

  useEffect(() => {
    setBaseDigimon(COMPOSABLE_DIGIMONS[upperId])
  }, [id])

  if (!digimon) {
    return <></>
  }

  const digimonName = digimon.name
  const hasDigimonBeenSeen =
    profile.seenDigimon?.includes(upperId) && digimon.id === upperId

  if (!hasDigimonBeenSeen) {
    return <></>
  }

  return (
    <MenuWrapper>
      <main className="compose-digimon-template">
        <header className="compose-digimon-header">
          <Typography as="h1">{getTexts('COMPOSE_DIGIMON_TITLE')}</Typography>

          <StarterDigimonCard digimon={digimon} />
        </header>

        <main>
          <header>
            <Typography as="h2">
              {getTexts('COMPOSE_DIGIMON_CORE_TITLE').replace(
                '[NAME]',
                digimonName
              )}
            </Typography>
          </header>

          <main className="compose-digimon-recipes">
            {digimon.composeRecipe.map((recipeItem) => (
              <ComposeRecipe
                key={`${digimonName}-compose-${recipeItem.id}`}
                recipe={recipeItem}
              />
            ))}
          </main>
        </main>
      </main>
    </MenuWrapper>
  )
}
