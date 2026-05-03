import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Tile } from '@/Components/App/Tile'

import './Gameboard.style.scss'
import { Fragment } from 'react/jsx-runtime'
import { getTexts } from '@/Helpers/getTexts.helper'

export const Gameboard = () => {
  const { profile } = useProfile()

  if (!profile) {
    return null
  }

  const currentZone = { ...Zones[profile.currentZone || 'RootDomainMainRoom'] }

  const gameboardVars = {
    '--view-size': currentZone.gridSize > 13 ? currentZone.gridSize : 13
  } as React.CSSProperties

  const gameboardBodyVars = {
    '--current-x': profile.currentX,
    '--current-y': profile.currentY,
    '--grid-size': currentZone.gridSize,
    backgroundImage: `url('/zones/maps/${currentZone.id}.png')`
  } as React.CSSProperties

  return (
    <div className="gameboard-wrapper">
      <header className="gameboard-title">
        <Text>
          {getTexts('CURRENT_ZONE').replaceAll('[ZONE]', currentZone.name)}
        </Text>
      </header>

      <main className="gameboard" style={gameboardVars}>
        <div className="gameboard-body" style={gameboardBodyVars}>
          {new Array(currentZone.gridSize).fill(null).map((_, y) => {
            return (
              <Fragment key={`y-${y}`}>
                {new Array(currentZone.gridSize).fill(null).map((_, x) => (
                  <Tile {...{ x, y }} key={`y-${y}-x-${x}`} />
                ))}
              </Fragment>
            )
          })}
        </div>
      </main>
    </div>
  )
}
