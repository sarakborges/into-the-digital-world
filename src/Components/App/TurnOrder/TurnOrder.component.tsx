import { isDigimonDefeated } from '@/Helpers/isDigimonDefeated.helper'

import { useBattleStore } from '@/Stores/Battle.store'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import './TurnOrder.style.scss'

export const TurnOrder = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  const [currentDigimon, ...otherDigimons] = battle.turnOrder.filter(
    (digimon) => !isDigimonDefeated(digimon)
  )

  return (
    <div className="turn-order">
      <Text>Turn order</Text>

      <div className="timeline">
        <div className="current-digimon">
          <div data-party={currentDigimon.party}>
            <Portrait
              alt={currentDigimon.name}
              src={`/${currentDigimon.portrait}.webp`}
            />
          </div>
        </div>

        <div className="other-digimons">
          {otherDigimons.map((digimon) => (
            <div
              data-party={digimon.party}
              key={`turn-order-${digimon.party}-${digimon.index}`}
            >
              <Portrait alt={digimon.name} src={`/${digimon.portrait}.webp`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
