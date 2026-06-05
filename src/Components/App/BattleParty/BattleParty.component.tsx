import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { getPercentage } from '@/Helpers/getPercentage'

import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './BattleParty.style.scss'
import { isDigimonDefeated } from '@/Helpers/isDigimonDefeated.helper'

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
              (acc, cur) => acc + cur.severity,
              0
            ) >= digimon.stats.vit
          }
        >
          <CharacterHeader character={digimon}>
            <div className="conditions">
              <Text>Conditions:</Text>

              {!!digimon.conditions && (
                <Text>
                  {Object.values(digimon.conditions)
                    .map((condition) => condition.severity)
                    .join(', ')}
                </Text>
              )}

              {!digimon.conditions && <Text>Healthy</Text>}
            </div>
          </CharacterHeader>
        </div>
      ))}
    </div>
  )
}
