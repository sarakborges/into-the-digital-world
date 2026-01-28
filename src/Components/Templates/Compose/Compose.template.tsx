import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { ROUTES } from '@/Routes/Routes'

import { ProfileContext } from '@/Contexts/Profile.context'

import { COMPOSABLE_DIGIMONS } from '@/GameData/Digimons'

import { Link } from '@/Components/System/Link'
import { Portrait } from '@/Components/System/Portrait'
import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'

import './Compose.style.scss'

export const ComposeTemplate = () => {
  const profileContext = useContext(ProfileContext)

  if (!profileContext) {
    return
  }

  const { profile } = profileContext

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

        <section className="digimon-stage">
          <main className="digimon-stage-list">
            {seenDigimons.map((digimonItem) => (
              <div key={`compose-digimons-${digimonItem.id}`}>
                <Link
                  to={ROUTES.COMPOSE_DIGIMON.path.replace(
                    ':id',
                    digimonItem.id.toLocaleLowerCase()
                  )}
                >
                  <Portrait
                    src={`/digimons/${digimonItem.id}.jpg`}
                    alt={digimonItem.name}
                  />

                  <Typography as="span">{digimonItem.name}</Typography>
                </Link>
              </div>
            ))}
          </main>
        </section>
      </main>
    </MenuWrapper>
  )
}
