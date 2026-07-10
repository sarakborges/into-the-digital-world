import { getTranslation } from '@/Helpers/Language'
import {
  doAttack,
  getBattleAttackOptions,
  isEnemyTurn
} from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'

import './SelectAttack.style.scss'

export const SelectAttack = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle || isEnemyTurn(battle)) {
    return
  }

  const [currentTurn] = battle.turnOrder

  const attackOptions = getBattleAttackOptions(currentTurn)

  return (
    <div className="select-attack">
      <Text>
        {getTranslation('SELECT_ATTACK_TITLE', {
          '[NAME]': currentTurn.name
        })}
      </Text>

      <main className="attacks-list">
        {attackOptions.map((attack) => (
          <div
            key={`battle-${currentTurn.party}-${currentTurn.index}-attacks-${attack.id}`}
          >
            <Button onClick={() => doAttack(attack.id)}>{attack.label}</Button>
          </div>
        ))}
      </main>
    </div>
  )
}
