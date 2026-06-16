import { isDigimonDefeated } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import './TurnOrder.style.scss'
import { getTexts } from '@/Helpers/Language'

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
      <Text>{getTexts('TURN_ORDER_TITLE')}</Text>

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
