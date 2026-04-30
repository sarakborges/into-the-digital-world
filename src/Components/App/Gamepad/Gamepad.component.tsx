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

  return (
    <aside className="gamepad">
      <div className="gamepad-row">
        <div className="gamepad-col">
          <Button
            disabled={
              currentZone.grid[profile.currentY - 1]?.[profile.currentX] ===
                undefined ||
              !currentZone.grid[profile.currentY]?.[profile.currentX]?.canMove
                .up
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
              currentZone.grid[profile.currentY]?.[profile.currentX - 1] ===
                undefined ||
              !currentZone.grid[profile.currentY]?.[profile.currentX]?.canMove
                .left
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
              currentZone.grid[profile.currentY]?.[profile.currentX + 1] ===
                undefined ||
              !currentZone.grid[profile.currentY]?.[profile.currentX]?.canMove
                .right
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
              currentZone.grid[profile.currentY + 1]?.[profile.currentX] ===
                undefined ||
              !currentZone.grid[profile.currentY]?.[profile.currentX]?.canMove
                .down
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
