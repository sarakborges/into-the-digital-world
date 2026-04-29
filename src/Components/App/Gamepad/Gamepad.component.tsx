import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp
} from 'react-icons/fa'

import type { ZoneType } from '@/Types/Zone.type'
import type { SceneType } from '@/Types/Scene.type'
import type { GameType } from '@/Types/Game.type'

import * as Zones from '@/GameData/Zones'

import { useGame } from '@/Hooks/Game.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Button } from '@/Components/System/Button'

import './Gamepad.style.scss'

export const Gamepad = () => {
  const { game, setGame } = useGame()
  const { setScene } = useScene()

  if (!game) {
    return <></>
  }

  const currentZone: ZoneType = { ...Zones[game.currentZone] }

  const setLocation = ({ x, y }: { x?: number; y?: number }) => {
    const updatedX = game.currentX + (x || 0)
    const updatedY = game.currentY + (y || 0)

    setGame((prevGame) => ({
      ...prevGame!,
      currentX: updatedX,
      currentY: updatedY
    }))

    currentZone?.grid[updatedY][updatedX]?.onEnter?.({
      setGame,
      setScene
    })
  }

  return (
    <aside className="gamepad">
      <div className="gamepad-row">
        <div className="gamepad-col">
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
      </div>

      <div className="gamepad-row">
        <div className="gamepad-col">
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

        <div className="gamepad-col" />

        <div className="gamepad-col">
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

      <div className="gamepad-row">
        <div className="gamepad-col">
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
      </div>
    </aside>
  )
}
