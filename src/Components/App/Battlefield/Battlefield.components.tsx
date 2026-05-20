import { useEffect } from 'react'

import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { useBattle } from '@/Hooks/Battle.hook'

import { Text } from '@/Components/System/Text'

import { BattleParty } from '@/Components/App/BattleParty'

import './Battlefield.style.scss'
import { getTexts } from '@/Helpers/getTexts.helper'

export const Battlefield = () => {
  const { battle } = useBattle()

  if (!battle) {
    return
  }

  const parties: {
    [k: string]: string
  } = {
    allies: getTexts('BATTLE_PARTY_ALLIES'),
    enemies: getTexts('BATTLE_PARTY_ENEMIES')
  }

  return (
    <div className="battlefield">
      <div className="digimon-parties">
        {Object.keys(parties).map((party) => (
          <div key={`party-${party}`}>
            <header>
              <Text>{parties[party]}</Text>
            </header>

            <main>
              <BattleParty
                party={{
                  title: parties[party],
                  list: battle[party]
                }}
              />
            </main>
          </div>
        ))}
      </div>
    </div>
  )
}
