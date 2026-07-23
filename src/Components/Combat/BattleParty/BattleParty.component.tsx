import type { CssPropertiesWithVariables } from '@/Types/CssProperties.type'
import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { isBattleOver } from '@/Helpers/Systems/Battle/getActiveDigimons.helper'
import { getConditionColor } from '@/Helpers/Systems/Battle/getConditionColor.helper'
import { isCurrentTurnDigimon } from '@/Helpers/Systems/Battle/isCurrentTurnDigimon.helper'
import { isDigimonDefeated } from '@/Helpers/Systems/Battle/isDigimonDefeated.helper'

import { CONDITIONS, isConditionId } from '@/Consts/Conditions.const'

import { useBattleStore } from '@/Stores/Battle.store'

import '@/Components/Combat/BattleParty/BattleParty.style.scss'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const BattleParty = ({
  party
}: {
  party: {
    title: string
    list: Array<PartyDigimonType>
  }
}) => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  const battleOver = isBattleOver(battle.turnOrder)

  return (
    <div className="battle-party">
      {party.list.map((digimon) => (
        <div
          key={`battle-party-${party.title}-digimon-${digimon.index}`}
          className="party-member"
          data-currentturn={
            !battleOver && isCurrentTurnDigimon({ battle, digimon })
          }
          data-defeated={isDigimonDefeated(digimon)}
        >
          <div className="party-digimon">
            <Portrait alt={digimon.name} src={`${digimon.portrait}.webp`} />
            <Text>{digimon.name}</Text>

            <div className="conditions">
              {!isDigimonDefeated(digimon) &&
                Object.entries(digimon.conditions ?? {}).map(
                  ([condition, stack]) => {
                    if (!isConditionId(condition)) {
                      return null
                    }

                    const conditionStyles: CssPropertiesWithVariables = {
                      '--icon-color': getConditionColor(condition)
                    }

                    return (
                      <div
                        style={conditionStyles}
                        key={`party-${digimon.party}-digimon-${digimon.index}-condition-${condition}`}
                      >
                        <div>{CONDITIONS[condition].icon}</div>

                        <Text as="p">{stack}</Text>
                      </div>
                    )
                  }
                )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
