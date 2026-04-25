import { useGame } from '@/Hooks/Game.hook'
import * as Zones from '@/GameData/Zones'

import { Portrait } from '@/Components/System/Portrait'

import './Gameboard.style.scss'

export const Gameboard = () => {
  const { game } = useGame()

  if (!game) return null

  const currentZone = Zones[game.currentZone]

  const sortedRows = Object.keys(currentZone.grid)
    .map(Number)
    .sort((a, b) => a - b)

  return (
    <main
      className="gameboard"
      style={
        {
          '--x': game.currentX,
          '--y': game.currentY,
          '--grid-size-x': currentZone.gridSize.x,
          '--grid-size-y': currentZone.gridSize.y
        } as React.CSSProperties
      }
    >
      <div className="gameboard-body">
        {sortedRows.map((row) => {
          const sortedCols = Object.keys(currentZone.grid[row])
            .map(Number)
            .sort((a, b) => a - b)

          return (
            <div className="gameboard-row" key={`row-${row}`}>
              {sortedCols.map((col) => (
                <div className="gameboard-col" key={`row-${row}-col-${col}`}>
                  <div
                    className="tile"
                    data-tiletype={currentZone.grid[row][col].texture || ''}
                  >
                    {game.currentX === col && game.currentY === row && (
                      <div className="player-character">
                        <Portrait
                          src="/avatars/glitch.jpg"
                          alt="Player character"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </main>
  )
}
