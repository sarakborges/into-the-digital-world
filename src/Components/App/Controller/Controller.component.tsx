import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp
} from 'react-icons/fa'

import { useGame } from '@/Hooks/Game.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import * as Zones from '@/GameData/Zones'

import { Portrait } from '@/Components/System/Portrait'
import { Button } from '@/Components/System/Button'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './Controller.style.scss'

export const Controller = () => {
  const { game, setGame } = useGame()

  if (!game) {
    return <></>
  }

  const { profile } = useProfile()

  const currentZone = { ...Zones[game.currentZone] }

  const setLocation = ({ x, y }: { x?: number; y?: number }) => {
    setGame((prevGame) => ({
      ...prevGame!,
      currentX: game.currentX + (x || 0),
      currentY: game.currentY + (y || 0)
    }))
  }

  return (
    <aside className="controller">
      <div className="controller-row">
        <div className="controller-col"></div>

        <div className="controller-col">
          <Button
            disabled={
              currentZone.grid[game.currentY - 1]?.[game.currentX] ===
                undefined ||
              !currentZone.grid[game.currentY]?.[game.currentX]?.canMove.up
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
              currentZone.grid[game.currentY]?.[game.currentX - 1] ===
                undefined ||
              !currentZone.grid[game.currentY]?.[game.currentX]?.canMove.left
            }
            onClick={() => setLocation({ x: -1 })}
          >
            <FaArrowLeft />
          </Button>
        </div>

        <div className="controller-col">
          <PlayerAvatar />
        </div>

        <div className="controller-col">
          <Button
            disabled={
              currentZone.grid[game.currentY]?.[game.currentX + 1] ===
                undefined ||
              !currentZone.grid[game.currentY]?.[game.currentX]?.canMove.right
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
              currentZone.grid[game.currentY + 1]?.[game.currentX] ===
                undefined ||
              !currentZone.grid[game.currentY]?.[game.currentX]?.canMove.down
            }
            onClick={() => setLocation({ y: +1 })}
          >
            <FaArrowDown />
          </Button>
        </div>

        <div className="controller-col"></div>
      </div>
    </aside>
  )
}
