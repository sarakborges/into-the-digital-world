import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Tile } from '@/Components/App/Tile'

import './Gameboard.style.scss'

export const Gameboard = () => {
  const { profile } = useProfile()

  if (!profile) {
    return null
  }

  const currentZone = { ...Zones[profile.currentZone || 'RootDomain'] }

  const sortedRows = Object.keys(currentZone.grid)
    .map(Number)
    .sort((a, b) => a - b)

  const gameboardVars = {
    '--x': profile.currentX,
    '--y': profile.currentY,
    '--grid-size-x': currentZone.gridSize.x,
    '--grid-size-y': currentZone.gridSize.y
  } as React.CSSProperties

  return (
    <>
      <header className="gameboard-title">
        <Text>{currentZone.name}</Text>
      </header>

      <main className="gameboard" style={gameboardVars}>
        <div className="gameboard-body">
          {sortedRows.map((y) => {
            const sortedCols = Object.keys(currentZone.grid[y])
              .map(Number)
              .sort((a, b) => a - b)

            return (
              <div className="gameboard-y" key={`y-${y}`}>
                {sortedCols.map((x) => (
                  <div className="gameboard-x" key={`y-${y}-x-${x}`}>
                    <Tile {...{ x, y }} />
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
