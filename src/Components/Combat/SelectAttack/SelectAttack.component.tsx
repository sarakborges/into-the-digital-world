import {AllAttacks} from '@/GameData/Attacks'

import {doAttack} from '@/Helpers/Systems/Battle'
import {getTexts} from '@/Helpers/Language'

import {useBattleStore} from '@/Stores/Battle.store'

import {Button} from '@/Components/DesignSystem/Button'
import {Text} from '@/Components/DesignSystem/Text'

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

  return (
    <div className="select-attack">
      <Text>
        {getTexts('SELECT_ATTACK_TITLE').replaceAll('[NAME]', currentTurn.name)}
        ?
      </Text>

      <main className="attacks-list">
        {Object.keys(currentTurn.attacks).map((attack) => (
          <div
            key={`battle-${currentTurn.party}-${currentTurn.index}-attacks-${attack}`}
          >
            <Button onClick={() => doAttack(attack)}>
              {getTexts('SELECT_ATTACK_OPTION')
                .replaceAll('[NAME]', AllAttacks[attack].name)
                .replaceAll('[COOLDOWN]', AllAttacks[attack].cooldown || 0)}
            </Button>
          </div>
        ))}
      </main>
    </div>
  )
}
