import { getTexts } from '@/Texts'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import { Portrait } from '@/Components/System/Portrait'
import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'

import './Wiki.style.scss'

export const WikiTemplate = () => {
  return (
    <MenuWrapper>
      <main className="wiki-template">
        <header>
          <Typography as="h1">{getTexts('WIKI_TITLE')}</Typography>
        </header>

        <main className="wiki-digimon-list">
          {Object.values(ALL_DIGIMONS)
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((digimonItem) => (
              <div key={`wiki-digimons-${digimonItem.id}`}>
                <Portrait
                  src={`/digimon_portraits/${digimonItem.id}.jpg`}
                  alt={digimonItem.name}
                />

                <Typography as="span">{digimonItem.name}</Typography>
              </div>
            ))}
        </main>
      </main>
    </MenuWrapper>
  )
}
