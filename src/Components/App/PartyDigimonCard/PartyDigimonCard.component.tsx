import { ALL_DIGIMONS } from '@/GameData/Digimons'

import type { PartnerDigimonType } from '@/Types/Digimon.type'

import { getTexts } from '@/Texts'

import { DIGIMON_LEVELS } from '@/Consts/Levels.const'

import { Typography } from '@/Components/System/Typography'
import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'

import { ExperienceBar } from '@/Components/App/ExperienceBar'

import './PartyDigimonCard.style.scss'

export const PartyDigimonCard = ({
  digimonItem
}: {
  digimonItem: PartnerDigimonType
}) => {
  const baseDigimon = ALL_DIGIMONS[digimonItem?.baseDigimon as string]

  return (
    <div
      className="partner-digimon-card"
      key={`partner-list-item-${digimonItem.id}`}
    >
      <main className="digimon-info">
        <Portrait
          src={`/digimons/${baseDigimon!.id}.jpg`}
          alt={`Party digimon: ${baseDigimon!.name}`}
          sm
        />

        <section className="info-text">
          <Typography as="h2">
            {digimonItem.name && <>{digimonItem.name} (</>}
            <>{baseDigimon!.name}</>
            {digimonItem.name && <>)</>}
          </Typography>

          <Typography as="span">
            <>{getTexts('DIGIMON_CARD_LEVEL')}</>
            {digimonItem.level}
          </Typography>

          <Typography as="span">
            <>{getTexts('DIGIMON_CARD_UNSPENT_POINTS')}</>
            {digimonItem.points || 0}
          </Typography>
        </section>
      </main>

      <ExperienceBar
        currentExp={digimonItem.experience!}
        nextLevelExp={DIGIMON_LEVELS[digimonItem.level!].expToNextLevel}
      />

      <Button>{getTexts('DIGIMON_CARD_DETAILS')}</Button>
    </div>
  )
}
