import { useContext } from 'react'

import type { DigimonType, PartyDigimon } from '@/Types/Digimon.type'

import { BattleContext } from '@/Contexts/Battle.context'

import { Portrait } from '@/Components/System/Portrait'

import './TurnOrder.style.scss'

export const TurnOrder = () => {
  const battleContext = useContext(BattleContext)

  if (!battleContext) {
    return
  }

  const { battle } = battleContext

  if (!battle || battle.isOver) {
    return <div className="turn-order-placeholder" />
  }

  return (
    <section className="battle-turn-order">
      <ul className="turns-list">
        {battle.turnOrder.map((turnItem, turnIndex) => {
          const turnDigimon = battle.digimons.find(
            (partyItem) => partyItem.id === turnItem
          )

          const baseDigimon = turnDigimon!.baseDigimon as DigimonType

          const digimonName = (turnDigimon as PartyDigimon).name || ''
          const displayName = digimonName
            ? `${digimonName} (${baseDigimon.name})`
            : baseDigimon.name

          return (
            <li
              key={`battle-turn-order-${turnItem}`}
              className={`turn-item ${turnDigimon?.party} ${
                turnIndex === 0 ? 'active' : ''
              } ${turnDigimon!.party}`}
            >
              <Portrait
                src={`/digimon_portraits/${baseDigimon.id}.jpg`}
                alt={`Party digimon: ${displayName}`}
                size="sm"
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
