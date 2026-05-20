import { useBattle } from '@/Hooks/Battle.hook'

import { BattleParty } from '@/Components/App/BattleParty'

import './Battlefield.style.scss'
import { Text } from '@/Components/System/Text'

export const Battlefield = () => {
  const { battle } = useBattle()

  if (!battle) {
    return
  }

  const { allies, enemies } = battle

  return (
    <div className="battlefield">
      <div className="digimon-parties">
        <div>
          <header>
            <Text>Your party</Text>
          </header>

          <main>
            <BattleParty party={allies} />
          </main>
        </div>

        <div>
          <header>
            <Text>Enemy party</Text>
          </header>

          <main>
            <BattleParty party={enemies} />
          </main>
        </div>
      </div>
    </div>
  )
}
