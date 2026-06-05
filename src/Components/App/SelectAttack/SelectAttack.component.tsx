import { AllAttacks } from '@/GameData/Attacks'

import { doAttack } from '@/Helpers/doAttack.helper'

import { useBattleStore } from '@/Stores/Battle.store'

import { Button } from '@/Components/System/Button'

import './SelectAttack.style.scss'
import { Text } from '@/Components/System/Text'

export const SelectAttack = () => {
  const { battle } = useBattleStore((state) => state)

  const [currentTurn] = battle?.turnOrder!

  if (currentTurn.party === 'enemies') {
    return
  }

  return (
    <div className="select-attack">
      <Text>What move should {currentTurn.name} use?</Text>

      <main className="attacks-list">
        {Object.keys(currentTurn.attacks).map((attack) => (
          <div
            key={`battle-${currentTurn.party}-${currentTurn.index}-attacks-${attack}`}
          >
            <Button onClick={() => doAttack(attack)}>
              {AllAttacks[attack].name} ({AllAttacks[attack].cooldown || 0}{' '}
              turns cooldown)
            </Button>
          </div>
        ))}
      </main>
    </div>
  )
}
