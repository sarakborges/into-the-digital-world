import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { doAttack } from '@/Helpers/Systems/Battle/doAttack.helper'
import { getBattleAttackOptions } from '@/Helpers/Systems/Battle/getBattleAttackOptions.helper'
import { isEnemyTurn } from '@/Helpers/Systems/Battle/isEnemyTurn.helper'

import { useBattleStore } from '@/Stores/Battle.store'

import '@/Components/Combat/SelectAttack/SelectAttack.style.scss'
import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

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
        {getTexts('SELECT_ATTACK_TITLE', {
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
