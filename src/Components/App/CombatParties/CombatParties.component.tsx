import { getTexts } from '@/Helpers/Language'

import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { BattleParty } from '@/Components/App/BattleParty'

import './CombatParties.style.scss'

export const CombatParties = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  const parties: {
    [partySide: string]: string
  } = {
    allies: getTexts('BATTLE_PARTY_ALLIES'),
    enemies: getTexts('BATTLE_PARTY_ENEMIES')
  }

  return (
    <div className="combat-parties">
      {Object.keys(parties).map((party) => (
        <BattleParty
          party={{
            title: parties[party],
            list: battle.turnOrder
              .filter((digimon) => digimon.party === party)
              .sort((a, b) => (a.index > b.index ? 1 : -1))
          }}
          key={`party-${party}`}
        />
      ))}
    </div>
  )
}
