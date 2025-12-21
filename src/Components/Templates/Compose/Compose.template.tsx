import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { ProfileContext } from '@/Contexts/Profile.context'

import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

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

  const seenDigimons = Object.values(ALL_DIGIMONS)
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
                <Portrait
                  src={`./digimons/${digimonItem.id}.jpg`}
                  alt={digimonItem.name}
                />

                <Typography as="span">{digimonItem.name}</Typography>
              </div>
            ))}
          </main>
        </section>
      </main>
    </MenuWrapper>
  )
}
