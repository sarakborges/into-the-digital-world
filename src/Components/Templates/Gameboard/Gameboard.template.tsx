import { useState } from 'react'
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp
} from 'react-icons/fa'

import { RootDomain } from '@/GameData/Zones'

import { Portrait } from '@/Components/System/Portrait'

import './Gameboard.style.scss'
import { Button } from '@/Components/System/Button'

export const GameboardTemplate = () => {
  const currentMap = { ...RootDomain }

  const [currentX, setCurrentX] = useState(currentMap.spawn.x)
  const [currentY, setCurrentY] = useState(currentMap.spawn.y)

  const setLocation = ({ x, y }: { x?: number; y?: number }) => {
    setCurrentX((prevX) => prevX + (x || 0))
    setCurrentY((prevY) => prevY + (y || 0))
  }

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
                    {currentX === Number(col) && currentY === Number(row) && (
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

        <aside className="controller">
          <div className="controller-row">
            <div className="controller-col"></div>

            <div className="controller-col">
              <Button
                disabled={
                  typeof currentMap.grid[currentY - 1]?.[currentX] ===
                    undefined ||
                  !currentMap.grid[currentY]?.[currentX]?.canMove.up
                }
                onClick={() => setLocation({ y: -1 })}
              >
                <FaArrowUp />
              </Button>
            </div>

            <div className="controller-col"></div>
          </div>

          <div className="controller-row">
            <div className="controller-col">
              <Button
                disabled={
                  typeof currentMap.grid[currentY]?.[currentX - 1] ===
                    undefined ||
                  !currentMap.grid[currentY]?.[currentX]?.canMove.left
                }
                onClick={() => setLocation({ x: -1 })}
              >
                <FaArrowLeft />
              </Button>
            </div>

            <div className="controller-col">
              <Portrait
                src="/digimon_portraits/AGUMON.jpg"
                alt="Player character"
              />
            </div>

            <div className="controller-col">
              <Button
                disabled={
                  typeof currentMap.grid[currentY]?.[currentX + 1] ===
                    undefined ||
                  !currentMap.grid[currentY]?.[currentX]?.canMove.right
                }
                onClick={() => setLocation({ x: +1 })}
              >
                <FaArrowRight />
              </Button>
            </div>
          </div>

          <div className="controller-row">
            <div className="controller-col"></div>

            <div className="controller-col">
              <Button
                disabled={
                  typeof currentMap.grid[currentY + 1]?.[currentX] ===
                    undefined ||
                  !currentMap.grid[currentY]?.[currentX]?.canMove.down
                }
                onClick={() => setLocation({ y: +1 })}
              >
                <FaArrowDown />
              </Button>
            </div>

            <div className="controller-col"></div>
          </div>
        </aside>
      </div>
    </div>
  )
}
