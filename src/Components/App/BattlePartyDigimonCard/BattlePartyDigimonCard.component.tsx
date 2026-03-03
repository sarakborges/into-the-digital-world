import { useContext } from 'react'

import type { DigimonType, PartyDigimon } from '@/Types/Digimon.type'

import { getDigimonName } from '@/Helpers'

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

  if (!battleContext || !partyItem) {
    return <div className="battle-party-item-card" />
  }

  const { battle } = battleContext

  const baseDigimon = partyItem.baseDigimon as DigimonType
  const digimonName = getDigimonName(partyItem)
  const isActive = battle.turnOrder[0] === partyItem.id
  const isDefeated = partyItem.currentHp <= 0

  return (
    <div
      key={`battle-player-party-digimon-${partyItem.id}`}
      className={[
        'battle-party-item-card',
        'card',
        isActive && !battle.isOver && 'active',
        !!isDefeated && 'defeated'
      ]
        .filter((item) => !!item)
        .join(' ')}
    >
      <main>
        <Portrait
          src={`/digimon_portraits/${baseDigimon.id}.jpg`}
          alt={`Party digimon: ${digimonName}`}
          size="xs"
        />

        <aside>
          <Typography as="span">{digimonName}</Typography>

          <ResourceBar
            currentValue={partyItem.currentHp}
            maxValue={partyItem.stats.hp}
            type="hp"
          />
        </aside>
      </main>
    </div>
  )
}
