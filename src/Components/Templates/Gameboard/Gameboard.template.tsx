import { useGame } from '@/Hooks/Game.hook'

import * as Zones from '@/GameData/Zones'

import { Portrait } from '@/Components/System/Portrait'

import { Controller } from '@/Components/App/Controller'

import './Gameboard.style.scss'

export const GameboardTemplate = () => {
  const { game } = useGame()

  if (!game) {
    return <></>
  }

  const currentMap = { ...Zones[game.currentMap] }

  return (
    <div className="game-body">
      <div className="main-game">
        <main className="gameboard">
          {Object.keys(currentMap.grid).map((row) => (
            <div className="gameboard-row" key={`map-row-${row}`}>
              {Object.keys(currentMap.grid[row]).map((col) => (
                <div
                  className="gameboard-col"
                  key={`map-row-${row}-col-${col}`}
                >
                  <div className="tile">
                    {game.currentX === Number(col) &&
                      game.currentY === Number(row) && (
                        <div className="player-character">
                          <Portrait
                            src="/digimon_portraits/AGUMON.jpg"
                            alt="Player character"
                          />
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </main>

        <Controller />
      </div>
    </div>
  )
}
