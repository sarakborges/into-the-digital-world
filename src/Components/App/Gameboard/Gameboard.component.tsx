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

  const currentZone = { ...Zones[profile.currentZone || 'RootDomain'] }
  const viewSize = 13

  const tileSize = Math.floor(
    (document.querySelector('.main-game')?.clientWidth || 0) / viewSize
  )

  const gameboardVars = {
    '--x': profile.currentX,
    '--y': profile.currentY,
    '--grid-size-x': currentZone.gridSize,
    '--grid-size-y': currentZone.gridSize,
    '--view-size': viewSize,
    '--tile-size': tileSize
  } as React.CSSProperties

  return (
    <div style={gameboardVars} className="gameboard-wrapper">
      <header className="gameboard-title">
        <Text>
          {getTexts('CURRENT_ZONE').replaceAll('[ZONE]', currentZone.name)}
        </Text>
      </header>

      <main className="gameboard">
        <div
          className="gameboard-body"
          style={{
            backgroundImage: `url('/zones/maps/${currentZone.id}.png')`
          }}
        >
          {new Array(viewSize).fill(null).map((_, y) => {
            return (
              <Fragment key={`y-${y + 1}`}>
                {new Array(viewSize).fill(null).map((_, x) => (
                  <Tile
                    {...{ x: x + 1, y: y + 1 }}
                    key={`y-${y + 1}-x-${x + 1}`}
                  />
                ))}
              </Fragment>
            )
          })}
        </div>
      </main>
    </div>
  )
}
