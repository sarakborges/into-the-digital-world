import type { BaseDigimonType } from '@/Types/BaseDigimon.type'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

import './BattleParty.style.scss'

export const BattleParty = ({
  party
}: {
  party: Array<BaseDigimonType & {}>
}) => {
  const partyWithData: Array<
    BaseDigimonType & {
      hp: number
      sp: number
    }
  > = []

  for (let digimon in party) {
    partyWithData.push({
      ...party[digimon],
      hp: 100,
      sp: 100
    })
  }

  const resourceBars = ['hp', 'sp']

  return (
    <div className="battle-party">
      {party!.map((digimon, digimonIndex) => (
        <div key={`battle-party-${digimonIndex}`} className="party-member">
          <header>
            <Portrait alt={digimon.name} src={`/${digimon.portrait}.webp`} />

            <div>
              <div className="digimon-name">
                <Text>{digimon.name}</Text>
              </div>

              <div className="resources">
                {resourceBars.map((resourceBar) => (
                  <div
                    key={`digimon-${digimon.id}-${resourceBar}`}
                    className="resource-bar"
                    style={
                      {
                        '--fill': `${digimon[resourceBar]}%`
                      } as React.CSSProperties
                    }
                  >
                    <Text>{digimon[resourceBar]}%</Text>
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
