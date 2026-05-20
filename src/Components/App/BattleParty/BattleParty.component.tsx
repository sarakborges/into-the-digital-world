import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { getPercentage } from '@/Helpers/getPercentage'

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
