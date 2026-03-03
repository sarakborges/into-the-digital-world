import { useContext } from 'react'

import { BattleContext } from '@/Contexts/Battle.context'

import { BattlePartyDigimonCard } from '@/Components/App/BattlePartyDigimonCard'

import './BattleParty.style.scss'

export const BattleParty = ({ type }: { type: 'player' | 'enemy' }) => {
  const battleContext = useContext(BattleContext)

  if (!battleContext) {
    return <></>
  }

  const {
    battle: { board, digimons }
  } = battleContext

  return (
    <aside className="battle-party">
      <main className="battle-party-board">
        {board?.[type].map((digimonId, digimonKey) => (
          <BattlePartyDigimonCard
            key={`battle-board-${type}-position-${digimonKey}`}
            partyItem={
              digimons.find((digimonItem) => digimonItem.id === digimonId)!
            }
          />
        ))}
      </main>
    </aside>
  )
}
