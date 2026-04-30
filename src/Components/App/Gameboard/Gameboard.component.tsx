import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Tile } from '@/Components/App/Tile'

import './Gameboard.style.scss'
import { Fragment } from 'react/jsx-runtime'

export const Gameboard = () => {
  const { profile } = useProfile()

  if (!profile) {
    return null
  }

  const currentZone = { ...Zones[profile.currentZone || 'RootDomain'] }
  const viewSize = 13

  const gameboardVars = {
    '--x': profile.currentX,
    '--y': profile.currentY,
    '--grid-size-x': currentZone.gridSize.x,
    '--grid-size-y': currentZone.gridSize.y,
    '--view-size': viewSize
  } as React.CSSProperties

  return (
    <div style={gameboardVars} className="gameboard-wrapper">
      <header className="gameboard-title">
        <Text>{currentZone.name}</Text>
      </header>

      <main className="gameboard">
        <div className="gameboard-body">
          {new Array(
            currentZone.gridSize.y > viewSize
              ? currentZone.gridSize.y
              : viewSize
          )
            .fill(null)
            .map((_, y) => {
              return (
                <Fragment key={`y-${y + 1}`}>
                  {new Array(
                    currentZone.gridSize.x > viewSize
                      ? currentZone.gridSize.x
                      : viewSize
                  )
                    .fill(null)
                    .map((_, x) => (
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
