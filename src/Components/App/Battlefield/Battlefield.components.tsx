import { useEffect } from 'react'

import { getTexts } from '@/Helpers/getTexts.helper'

import { useBattle } from '@/Hooks/Battle.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { BattleParty } from '@/Components/App/BattleParty'

import './Battlefield.style.scss'

export const Battlefield = () => {
  const { battle } = useBattle()
  const { scene, setScene } = useScene()

  if (!battle) {
    return
  }

  const parties: {
    [k: string]: string
  } = {
    allies: getTexts('BATTLE_PARTY_ALLIES'),
    enemies: getTexts('BATTLE_PARTY_ENEMIES')
  }

  useEffect(() => {
    const currentTurn = battle.turnOrder[0]

    setScene({
      currentScene: 'battle',
      currentStage: `${currentTurn.party}Turn`
    })
  }, [battle.turnOrder])

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
