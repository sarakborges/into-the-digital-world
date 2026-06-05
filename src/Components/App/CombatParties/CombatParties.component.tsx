import { getTexts } from '@/Helpers/getTexts.helper'

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
        <div key={`party-${party}`}>
          <header>
            <Text>{parties[party]}</Text>
          </header>

          <main>
            <BattleParty
              party={{
                title: parties[party],
                list: battle.turnOrder
                  .filter((digimon) => digimon.party === party)
                  .sort((a, b) => (a.index > b.index ? 1 : -1))
              }}
            />
          </main>
        </div>
      ))}
    </div>
  )
}
