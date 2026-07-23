import { getBattlePartyGroups } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

import { BattleParty } from '@/Components/Combat/BattleParty'
import '@/Components/Combat/CombatParties/CombatParties.style.scss'

export const CombatParties = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  const partyGroups = getBattlePartyGroups()

  return (
    <div className="combat-parties">
      {partyGroups.map(({ party, title, list }) => (
        <BattleParty
          party={{
            title,
            list
          }}
          key={`party-${party}`}
        />
      ))}
    </div>
  )
}
