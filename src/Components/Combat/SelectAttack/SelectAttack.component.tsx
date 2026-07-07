import { doAttack, getBattleAttackOptions } from '@/Helpers/Systems/Battle'
import { getTexts } from '@/Helpers/Language'

import { useBattleStore } from '@/Stores/Battle.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'

import './SelectAttack.style.scss'

export const SelectAttack = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  const [currentTurn] = battle.turnOrder

  if (currentTurn.party === 'enemies') {
    return
  }

  const attackOptions = getBattleAttackOptions(currentTurn)

  return (
    <div className="select-attack">
      <Text>
        {getTexts('SELECT_ATTACK_TITLE').replaceAll('[NAME]', currentTurn.name)}
        ?
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
