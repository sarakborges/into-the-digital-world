import type {CSSProperties} from 'react'

import type {PartyDigimonType} from '@/Types/PartyDigimon.type'

import {isDigimonDefeated} from '@/Helpers/Systems/Battle'

import {CONDITIONS} from '@/Consts/Conditions.const'

import {useBattleStore} from '@/Stores/Battle.store'

import {Text} from '@/Components/DesignSystem/Text'
import {Portrait} from '@/Components/DesignSystem/Portrait'

import './BattleParty.style.scss'

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

  const notDefeatedDigimons = battle.turnOrder.filter(
    (digimon) => !isDigimonDefeated(digimon)
  )
  const battleOver =
    notDefeatedDigimons.every((digimon) => digimon.party === 'allies') ||
    notDefeatedDigimons.every((digimon) => digimon.party === 'enemies')

  return (
    <div className="battle-party">
      {party.list.map((digimon) => (
        <div
          key={`battle-party-${party.title}-digimon-${digimon.index}`}
          className="party-member"
          data-currentturn={
            !battleOver &&
            battle.turnOrder[0].party === digimon.party &&
            battle.turnOrder[0].index === digimon.index
          }
          data-defeated={isDigimonDefeated(digimon)}
        >
          <div className="party-digimon">
            <Portrait alt={digimon.name} src={`${digimon.portrait}.webp`} />
            <Text>{digimon.name}</Text>

            <div className="conditions">
              {!isDigimonDefeated(digimon) &&
                !!digimon.conditions &&
                Object.keys(digimon.conditions).map((condition) => (
                  <div
                    style={
                      {
                        '--icon-color': CONDITIONS[condition].color
                      } as CSSProperties
                    }
                    key={`party-${digimon.party}-digimon-${digimon.index}-condition-${condition}`}
                  >
                    <div>{CONDITIONS[condition].icon}</div>

                    <Text as="p">{digimon.conditions![condition]}</Text>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
