import { AllItems } from '@/GameData/Items'

import { useBattle } from '@/Hooks/Battle.hook'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import './CombatLoot.style.scss'

export const CombatLoot = () => {
  const { battle } = useBattle()

  if (!battle) {
    return
  }

  return (
    <div className="combat-loot">
      <Text>Loot:</Text>

      {Object.keys(battle.loot!).map((item) => (
        <div className="loot-item" key={`combat-loot-item-${item}`}>
          {AllItems[item].category === 'core' && (
            <div className="core-item">
              <Portrait alt="Core border" src={`/items/chip.png`} />

              <Portrait
                alt={AllItems[item].name}
                src={`/${AllItems[item].portrait}.webp`}
              />
            </div>
          )}

          <Text as="p">
            {`${AllItems[item].name} x${battle.loot![item].amount}`}
          </Text>
        </div>
      ))}
    </div>
  )
}
