import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp
} from 'react-icons/fa'

import type { ZoneType } from '@/Types/Zone.type'

import { saveSession } from '@/Helpers/saveSession.helper'

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

  const currentZone: ZoneType = Zones[profile.currentZone.id]

  const setLocation = ({ x, y }: { x?: number; y?: number }) => {
    const updatedX = profile.currentZone.x + (x || 0)
    const updatedY = profile.currentZone.y + (y || 0)

    const updatedProfile = {
      ...profile,

      currentZone: {
        id: currentZone.id,
        x: updatedX,
        y: updatedY
      }
    }

    setProfile(updatedProfile)
    saveSession({ key: 'profile', value: updatedProfile })

    currentZone?.grid[updatedY][updatedX]?.onEnter?.({
      updatedProfile,
      setProfile,
      setScene
    })
  }

  const prevX = profile.currentZone.x - 1
  const nextX = profile.currentZone.x + 1

  const prevY = profile.currentZone.y - 1
  const nextY = profile.currentZone.y + 1

  const existsPrevX = !!currentZone.grid[profile.currentZone.y][prevX]
  const existsPrevY = !!currentZone.grid[prevY][profile.currentZone.x]

  const existsNextX = !!currentZone.grid[profile.currentZone.y][nextX]
  const existsNextY = !!currentZone.grid[nextY][profile.currentZone.x]

  const npcExistsInPrevX = !!currentZone.grid[profile.currentZone.y][prevX]?.npc
  const npcExistsInPrevY = !!currentZone.grid[prevY][profile.currentZone.x]?.npc

  const npcExistsInNextX = !!currentZone.grid[profile.currentZone.y][nextX]?.npc
  const npcExistsInNextY = !!currentZone.grid[nextY][profile.currentZone.x]?.npc

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
