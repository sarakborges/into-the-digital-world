import { getBattleTurnOrder } from '@/Helpers/Systems/Battle/getBattleTurnOrder.helper'

import { useBattleStore } from '@/Stores/Battle.store'

import '@/Components/Combat/TurnOrder/TurnOrder.style.scss'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'

export const TurnOrder = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return null
  }

  const [currentDigimon, ...otherDigimons] = getBattleTurnOrder()

  if (!currentDigimon) {
    return null
  }

  return (
    <div className="turn-order">
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
