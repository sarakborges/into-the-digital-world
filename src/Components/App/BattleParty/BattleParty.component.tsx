import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { getPercentage } from '@/Helpers/getPercentage'

import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './BattleParty.style.scss'

export const BattleParty = ({
  party
}: {
  party: {
    title: string
    list: Array<PartyDigimonType>
  }
}) => {
  const battle = useBattleStore((state) => state.battle)

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
          <CharacterHeader character={digimon}>
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
                    <>{resource.toLocaleUpperCase()}: </>

                    <>
                      {getPercentage({
                        current: digimon[resource],
                        max: digimon.stats[resources[resource]]
                      })}
                      %
                    </>
                  </Text>
                </div>
              ))}
            </div>
          </CharacterHeader>
        </div>
      ))}
    </div>
  )
}
