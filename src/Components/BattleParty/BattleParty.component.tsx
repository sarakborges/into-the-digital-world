import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { isDigimonDefeated } from '@/Helpers/Systems/Battle'
import { getTexts } from '@/Helpers/Language'

import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/DesignSystem/Text'

import './BattleParty.style.scss'
import { Portrait } from '@/DesignSystem/Portrait'

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
          data-defeated={
            Object.values(digimon.conditions ?? {}).reduce(
              (acc, cur) => acc + cur,
              0
            ) >= digimon.stats.vit
          }
        >
          <div className="party-digimon">
            <Portrait alt={digimon.name} src={`${digimon.portrait}.webp`} />
            <Text>{digimon.name}</Text>

            <div className="conditions">
              {!isDigimonDefeated(digimon) && !!digimon.conditions && (
                <Text as="p">
                  {Object.keys(digimon.conditions)
                    .map(
                      (condition) =>
                        `${getTexts(`ATTACK_CONDITION_${condition.toLocaleUpperCase()}`)} ${digimon.conditions![condition]}`
                    )
                    .join('\n')}
                </Text>
              )}

              {!isDigimonDefeated(digimon) && !digimon.conditions && (
                <Text>{getTexts('BATTLE_LOG_DIGIMON_HEALTHY')}</Text>
              )}

              {!!isDigimonDefeated(digimon) && (
                <Text>{getTexts('BATTLE_LOG_DIGIMON_DEFEATED')}</Text>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
