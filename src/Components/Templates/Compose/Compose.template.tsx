import { useContext } from 'react'

import { getTexts } from '@/Texts'

import { CompositionContext } from '@/Contexts/Composition.context'
import { ProfileContext } from '@/Contexts/Profile.context'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import { Typography } from '@/Components/System/Typography'
import { Portrait } from '@/Components/System/Portrait'
import { Modal } from '@/Components/System/Modal'

import { MenuWrapper } from '@/Components/App/MenuWrapper'
import { DetailedDigimonCard } from '@/Components/App/DetailedDigimonCard'
import { ComposeDigimonTemplate } from '@/Components/App/ComposeDigimonTemplate'

import './Compose.style.scss'

export const ComposeTemplate = () => {
  const compositionContext = useContext(CompositionContext)
  const profileContext = useContext(ProfileContext)

  if (!compositionContext || !profileContext) {
    return
  }

  const { baseDigimon, setBaseDigimon } = compositionContext
  const { profile } = profileContext

  const digimons = Object.values(ALL_DIGIMONS)
    .filter((digimonItem) => profile.templates.includes(digimonItem.id))
    .sort((a, b) => (a.id > b.id ? 1 : -1))

  return (
    <MenuWrapper>
      <main className="compose-template">
        {!!baseDigimon && (
          <Modal>
            <main className="digimon-template">
              <div className="template-body">
                <header>
                  <Portrait
                    src={`/digimon_portraits/${baseDigimon.id}.jpg`}
                    alt={`Composing ${baseDigimon.name}`}
                    size="xs"
                  />

                  <main>
                    <Typography as="h2">
                      {getTexts('COMPOSE_DIGIMON_TEMPLATE_TITLE').replace(
                        '[NAME]',
                        baseDigimon.name
                      )}
                    </Typography>

                    <Typography>
                      {getTexts('COMPOSE_DIGIMON_TEMPLATE_SUBTITLE')}
                    </Typography>
                  </main>
                </header>

                <main>
                  <ComposeDigimonTemplate />
                </main>
              </div>
            </main>
          </Modal>
        )}

        <header className="compose-header">
          <Typography as="h1">{getTexts('COMPOSE_TITLE')}</Typography>
          <Typography as="h2">{getTexts('COMPOSE_SUBTITLE')}</Typography>
        </header>

        <main className="compose-body">
          <aside className="digimon-list">
            {digimons.map((digimonItem) => (
              <div key={`compose-digimons-${digimonItem.id}`}>
                <button onClick={() => setBaseDigimon(digimonItem)}>
                  <DetailedDigimonCard digimon={digimonItem} />
                </button>
              </div>
            ))}
          </aside>
        </main>
      </main>
    </MenuWrapper>
  )
}
