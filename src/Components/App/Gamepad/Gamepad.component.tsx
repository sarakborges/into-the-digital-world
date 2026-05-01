import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp
} from 'react-icons/fa'

import type { ZoneType } from '@/Types/Zone.type'

import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Button } from '@/Components/System/Button'

import './Gamepad.style.scss'

export const Gamepad = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  if (!profile) {
    return <></>
  }

  const currentZone: ZoneType = { ...Zones[profile.currentZone] }

  const setLocation = ({ x, y }: { x?: number; y?: number }) => {
    const updatedX = profile.currentX + (x || 0)
    const updatedY = profile.currentY + (y || 0)

    setProfile((prevProfile) => ({
      ...prevProfile!,
      currentX: updatedX,
      currentY: updatedY
    }))

    currentZone?.grid[updatedY][updatedX]?.onEnter?.({
      setProfile,
      setScene
    })
  }

  const prevX = profile?.currentX - 1
  const nextX = profile?.currentX + 1

  const prevY = profile?.currentY - 1
  const nextY = profile?.currentY + 1

  const existsPrevX = !!currentZone.grid[profile.currentY]?.[prevX]
  const existsPrevY = !!currentZone.grid[prevY]?.[profile.currentX]

  const existsNextX = !!currentZone.grid[profile.currentY]?.[nextX]
  const existsNextY = !!currentZone.grid[nextY]?.[profile.currentX]

  const npcExistsInPrevX = !!currentZone.grid[profile.currentY]?.[prevX]?.npc
  const npcExistsInPrevY = !!currentZone.grid[prevY]?.[profile.currentX]?.npc

  const npcExistsInNextX = !!currentZone.grid[profile.currentY]?.[nextX]?.npc
  const npcExistsInNextY = !!currentZone.grid[nextY]?.[profile.currentX]?.npc

  const canMovePrevX = existsPrevX && !npcExistsInPrevX
  const canMovePrevY = existsPrevY && !npcExistsInPrevY
  const canMoveNextX = existsNextX && !npcExistsInNextX
  const canMoveNextY = existsNextY && !npcExistsInNextY

  return (
    <aside className="gamepad">
      <div className="gamepad-row">
        <div className="gamepad-col">
          <Button
            disabled={!canMovePrevY}
            onClick={() => setLocation({ y: -1 })}
          >
            <FaArrowUp />
          </Button>
        </div>
      </div>

      <div className="gamepad-row">
        <div className="gamepad-col">
          <Button
            disabled={!canMovePrevX}
            onClick={() => setLocation({ x: -1 })}
          >
            <FaArrowLeft />
          </Button>
        </div>

        <div className="gamepad-col" />

        <div className="gamepad-col">
          <Button
            disabled={!canMoveNextX}
            onClick={() => setLocation({ x: +1 })}
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>

      <div className="gamepad-row">
        <div className="gamepad-col">
          <Button
            disabled={!canMoveNextY}
            onClick={() => setLocation({ y: +1 })}
          >
            <FaArrowDown />
          </Button>
        </div>
      </div>
    </aside>
  )
}
