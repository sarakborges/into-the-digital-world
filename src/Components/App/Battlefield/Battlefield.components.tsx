import { useEffect } from 'react'

import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { useBattle } from '@/Hooks/Battle.hook'

import { Text } from '@/Components/System/Text'

import { BattleParty } from '@/Components/App/BattleParty'

import './Battlefield.style.scss'

export const Battlefield = () => {
  const { battle, setBattle } = useBattle()

  if (!battle) {
    return
  }

  const mapPartyDigimon = (digimon: BaseDigimonType) => {
    return {
      ...digimon,
      hp: digimon.stats.vit,
      sp: digimon.stats.sta
    }
  }

  const parties: {
    [k: string]: {
      title: string
      list: Array<PartyDigimonType>
    }
  } = {
    allies: {
      title: 'Your party',
      list: []
    },

    enemies: {
      title: 'Enemy party',
      list: []
    }
  }

  useEffect(() => {
    parties.allies.list = battle.allies.map((ally) => mapPartyDigimon(ally))
    parties.enemies.list = battle.enemies.map((enemy) => mapPartyDigimon(enemy))

    setBattle({
      ...battle,

      allies: parties.allies.list,
      enemies: parties.enemies.list
    })
  }, [])

  return (
    <div className="battlefield">
      <div className="digimon-parties">
        {Object.keys(parties).map((party) => (
          <div>
            <header>
              <Text>{parties[party].title}</Text>
            </header>

            <main>
              <BattleParty
                party={{
                  title: parties[party].title,
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
