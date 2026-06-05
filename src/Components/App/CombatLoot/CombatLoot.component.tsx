import { AllItems } from '@/GameData/Items'

import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { ItemCore } from '@/Components/App/ItemCore'

import './CombatLoot.style.scss'

export const CombatLoot = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle || !Object.keys(battle.loot ?? {}).length) {
    return
  }

  return (
    <div className="combat-loot">
      {Object.keys(battle.loot!).map((item) => (
        <div className="loot-item" key={`combat-loot-item-${item}`}>
          {AllItems[item].category === 'core' && <ItemCore item={item} />}
          <Text>{AllItems[item].name}</Text>
          <Text>{battle.loot![item].amount}</Text>
        </div>
      ))}
    </div>
  )
}
