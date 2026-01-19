import { getTexts } from '@/Texts'

import { DigimonStages } from '@/Types/DigimonStages.type'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import { Portrait } from '@/Components/System/Portrait'
import { Typography } from '@/Components/System/Typography'

import { MenuWrapper } from '@/Components/App/MenuWrapper'

import './Wiki.style.scss'

export const WikiTemplate = () => {
  const stages = Object.values(DigimonStages)
  const allDigimons = Object.values(ALL_DIGIMONS).sort((a, b) =>
    a.name > b.name ? 1 : -1
  )

  const stagesWithDigimons = stages.map((stageItem) => ({
    ...stageItem,
    digimons: allDigimons.filter(
      (digimonItem) => DigimonStages[digimonItem.stage].id === stageItem.id
    )
  }))

  return (
    <MenuWrapper>
      <main className="wiki-template">
        <header>
          <Typography as="h1">{getTexts('WIKI_TITLE')}</Typography>
        </header>

        {stagesWithDigimons
          .filter((stageItem) => stageItem?.digimons?.length > 0)
          .map((stageItem) => (
            <section className="digimon-stage">
              <header>
                <Typography as="h2">
                  {getTexts('WIKI_STAGE_TITLE').replace(
                    ':stage',
                    stageItem.value
                  )}
                </Typography>
              </header>

              <main className="digimon-stage-list">
                {stageItem.digimons.map((digimonItem) => (
                  <div key={`wiki-digimons-${digimonItem.id}`}>
                    <Portrait
                      src={`./digimons/${digimonItem.id}.jpg`}
                      alt={digimonItem.name}
                    />

                    <Typography as="span">{digimonItem.name}</Typography>
                  </div>
                ))}
              </main>
            </section>
          ))}
      </main>
    </MenuWrapper>
  )
}
