import { useGame } from '@/Hooks/Game.hook'

import * as Zones from '@/GameData/Zones'

import { Portrait } from '@/Components/System/Portrait'

import './Gameboard.style.scss'

export const Gameboard = () => {
  const { game } = useGame()

  if (!game) {
    return <></>
  }

  const currentZone = { ...Zones[game.currentZone] }

  return (
    <main className="gameboard">
      {Object.keys(currentZone.grid).map((row) => (
        <div className="gameboard-row" key={`map-row-${row}`}>
          {Object.keys(currentZone.grid[row]).map((col) => (
            <div className="gameboard-col" key={`map-row-${row}-col-${col}`}>
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
  )
}
