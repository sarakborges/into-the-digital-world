import { useContext } from 'react'

import type { DigimonType, PartyDigimon } from '@/Types/Digimon.type'

import { BattleContext } from '@/Contexts/Battle.context'

import { Typography } from '@/Components/System/Typography'
import { Portrait } from '@/Components/System/Portrait'

import './TurnOrder.style.scss'

export const TurnOrder = () => {
  const battleContext = useContext(BattleContext)

  if (!battleContext) {
    return
  }

  const { battle } = battleContext

  if (!battle || battle.isOver) {
    return <></>
  }

  return (
    <section className="battle-turn-order">
      <Typography as="h2">Turn order:</Typography>

      <ul className="turns-list">
        {battle.turnOrder.map((turnItem, turnIndex) => {
          const turnDigimon = battle.digimons.find(
            (partyItem) => partyItem.id.toString() === turnItem.toString()
          )

          const baseDigimon = turnDigimon!.baseDigimon as DigimonType

          const digimonName = (turnDigimon as PartyDigimon).name || ''
          const displayName = digimonName
            ? `${digimonName} (${baseDigimon.name})`
            : baseDigimon.name

          return (
            <li
              key={`battle-turn-order-${turnItem}`}
              className={`turn-item ${turnIndex === 0 ? 'active' : ''} ${
                turnDigimon!.party
              }`}
            >
              <Portrait
                src={`./digimons/${baseDigimon.id}.jpg`}
                alt={`Party digimon: ${displayName}`}
                sm
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
