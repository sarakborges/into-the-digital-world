import { useContext } from 'react'

import type { DigimonType, PartyDigimon } from '@/Types/Digimon.type'

import { BattleContext } from '@/Contexts/Battle.context'

import { Typography } from '@/Components/System/Typography'
import { Portrait } from '@/Components/System/Portrait'

import { ResourceBar } from '@/Components/App/ResourceBar'

import './BattlePartyDigimonCard.style.scss'

export const BattlePartyDigimonCard = ({
  partyItem
}: {
  partyItem: PartyDigimon
}) => {
  const battleContext = useContext(BattleContext)

  if (!battleContext) {
    return
  }

  const { battle } = battleContext

  const baseDigimon = partyItem.baseDigimon as DigimonType

  const digimonName = (partyItem as PartyDigimon).name || ''
  const displayName = digimonName
    ? `${digimonName} (${baseDigimon.name})`
    : baseDigimon.name

  const isActive = battle.turnOrder[0].toString() === partyItem.id.toString()

  return (
    <div
      key={`battle-player-party-digimon-${partyItem.id}`}
      className={`battle-party-item-card ${
        isActive && !battle.isOver && 'active'
      }`}
    >
      <Portrait
        src={`./digimons/${baseDigimon.id}.jpg`}
        alt={`Party digimon: ${displayName}`}
        sm
      />

      <section className="digimon-info">
        <Typography as="span">{displayName}</Typography>
        <Typography as="span">Level: {partyItem.level}</Typography>

        <div className="digimon-resource">
          <Typography as="span">HP:</Typography>

          <ResourceBar
            currentValue={partyItem.currentHp}
            maxValue={partyItem.stats.hp}
            type="hp"
          />
        </div>

        <div className="digimon-resource">
          <Typography as="span">SP:</Typography>

          <ResourceBar
            currentValue={partyItem.currentSp}
            maxValue={partyItem.stats.sp}
            type="sp"
          />
        </div>
      </section>
    </div>
  )
}
