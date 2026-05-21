import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { getPercentage } from '@/Helpers/getPercentage'

import { useBattle } from '@/Hooks/Battle.hook'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import './BattleParty.style.scss'

export const BattleParty = ({
  party
}: {
  party: {
    title: string
    list: Array<PartyDigimonType>
  }
}) => {
  const { battle } = useBattle()

  const resources = {
    hp: 'vit',
    sp: 'sta'
  }

  return (
    <div className="battle-party">
      {party!.list.map((digimon, digimonIndex) => (
        <div
          key={`battle-party-${party.title}-digimon-${digimonIndex}`}
          className="party-member"
          data-currentturn={
            battle?.turnOrder[0].party === digimon.party &&
            battle?.turnOrder[0].index === digimonIndex
          }
          data-defeated={digimon.hp === 0}
        >
          <header>
            <Portrait alt={digimon.name} src={`/${digimon.portrait}.webp`} />

            <div>
              <div className="digimon-name">
                <Text>{digimon.name}</Text>
              </div>

              <div className="resources">
                {Object.keys(resources).map((resource) => (
                  <div
                    className="resource-bar"
                    key={`battle-party-${party.title}-digimon-${digimonIndex}-resources-${resource}`}
                    style={
                      {
                        '--fill': `${getPercentage({
                          current: digimon[resource],
                          max: digimon.stats[resources[resource]]
                        })}%`
                      } as React.CSSProperties
                    }
                  >
                    <Text>
                      {getPercentage({
                        current: digimon[resource],
                        max: digimon.stats[resources[resource]]
                      })}
                      %
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </header>
        </div>
      ))}
    </div>
  )
}
