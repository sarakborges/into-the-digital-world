import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { getPercentage } from '@/Helpers/getPercentage'

import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './BattleParty.style.scss'
import { isDigimonDefeated } from '@/Helpers/isDigimonDefeated.helper'
import { getTexts } from '@/Helpers/getTexts.helper'

export const BattleParty = ({
  party
}: {
  party: {
    title: string
    list: Array<PartyDigimonType>
  }
}) => {
  const { battle } = useBattleStore((state) => state)

  const notDefeatedDigimons = battle?.turnOrder.filter(
    (digimon) => !isDigimonDefeated(digimon)
  )
  const battleOver =
    notDefeatedDigimons?.every((digimon) => digimon.party === 'allies') ||
    notDefeatedDigimons?.every((digimon) => digimon.party === 'enemies')

  return (
    <div className="battle-party">
      {party!.list.map((digimon, digimonIndex) => (
        <div
          key={`battle-party-${party.title}-digimon-${digimonIndex}`}
          className="party-member"
          data-currentturn={
            !battleOver &&
            battle?.turnOrder[0].party === digimon.party &&
            battle?.turnOrder[0].index === digimonIndex
          }
          data-defeated={
            Object.values(digimon.conditions ?? {}).reduce(
              (acc, cur) => acc + cur,
              0
            ) >= digimon.stats.vit
          }
        >
          <CharacterHeader character={digimon}>
            <div className="conditions">
              {!isDigimonDefeated(digimon) && !!digimon.conditions && (
                <Text>
                  {Object.keys(digimon.conditions)
                    .map(
                      (condition) =>
                        `${getTexts(`ATTACK_CONDITION_SEVERITY${digimon.conditions![condition]}`)} ${getTexts(`ATTACK_CONDITION_${condition.toLocaleUpperCase()}`)}`
                    )
                    .join(', ')}
                </Text>
              )}

              {!isDigimonDefeated(digimon) && !digimon.conditions && (
                <Text>Healthy</Text>
              )}

              {!!isDigimonDefeated(digimon) && <Text>Defeated</Text>}
            </div>
          </CharacterHeader>
        </div>
      ))}
    </div>
  )
}
