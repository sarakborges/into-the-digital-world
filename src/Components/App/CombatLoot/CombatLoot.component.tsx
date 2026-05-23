import { AllItems } from '@/GameData/Items'

import { useBattle } from '@/Hooks/Battle.hook'

import { Text } from '@/Components/System/Text'

import { ItemCore } from '@/Components/App/ItemCore'

import './CombatLoot.style.scss'

export const CombatLoot = () => {
  const { battle } = useBattle()

  if (!battle || !Object.keys(battle.loot!).length) {
    return
  }

  return (
    <div className="combat-loot">
      <Text>Loot:</Text>

      <div className="loot-list">
        {Object.keys(battle.loot!).map((item) => (
          <div className="loot-item" key={`combat-loot-item-${item}`}>
            {AllItems[item].category === 'core' && <ItemCore item={item} />}

            <Text as="p">
              {`${AllItems[item].name} x${battle.loot![item].amount}`}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
