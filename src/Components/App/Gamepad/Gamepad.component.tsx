import { Fragment } from 'react/jsx-runtime'
import {
  BsArrowDown,
  BsArrowDownLeft,
  BsArrowDownRight,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUp,
  BsArrowUpLeft,
  BsArrowUpRight
} from 'react-icons/bs'

import type { ZoneType } from '@/Types/Zone.type'

import { saveSession } from '@/Helpers/Systems/Profile'
import { startBattle } from '@/Helpers/Systems/Battle'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useGameStore } from '@/Stores/Game.store'

import { Button } from '@/Components/System/Button'

import './Gamepad.style.scss'

export const Gamepad = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { game } = useGameStore((state) => state)

  if (!profile || !!battle) {
    return
  }

  const coordinates = {
    topLeft: {
      x: -1,
      y: -1,
      icon: <BsArrowUpLeft />
    },

    topMiddle: {
      x: 0,
      y: -1,
      icon: <BsArrowUp />
    },

    topRight: {
      x: +1,
      y: -1,
      icon: <BsArrowUpRight />
    },

    middleLeft: {
      x: -1,
      y: 0,
      icon: <BsArrowLeft />
    },

    center: null,

    middleRight: {
      x: +1,
      y: 0,
      icon: <BsArrowRight />
    },

    bottomLeft: {
      x: -1,
      y: +1,
      icon: <BsArrowDownLeft />
    },

    bottomMiddle: {
      x: 0,
      y: +1,
      icon: <BsArrowDown />
    },

    bottomRight: {
      x: +1,
      y: +1,
      icon: <BsArrowDownRight />
    }
  }

  const currentZone: ZoneType =
    AllZones[profile.currentZone.id][profile.currentZone.map]

  const setLocation = ({ x, y }: { x?: number; y?: number }) => {
    const updatedX = profile.currentZone.x + (x || 0)
    const updatedY = profile.currentZone.y + (y || 0)

    const updatedProfile = {
      ...profile,

      currentZone: {
        ...profile.currentZone,
        x: updatedX,
        y: updatedY
      }
    }

    setProfile(updatedProfile)

    startBattle()
    const { battle } = useBattleStore.getState()

    if (!!battle) {
      return
    }

    saveSession(updatedProfile)

    const currentTile = currentZone.tiles.find(
      (tile) =>
        tile.x === updatedX &&
        tile.y === updatedY &&
        (tile.condition === undefined || !!tile.condition())
    )

    if (
      !!currentTile?.onEnter &&
      (currentTile.condition === undefined || !!currentTile?.condition())
    ) {
      currentTile.onEnter.function()

      return
    }
  }

  const canMoveToCoordinate = ({ x, y }: { x: number; y: number }) => {
    const tile = currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x + x &&
        tile.y === profile.currentZone.y + y
    )

    const npcExists = !!tile?.some(
      (tile) =>
        !!tile.npc && (tile.condition === undefined || !!tile.condition())
    )

    const eventExists = !!tile?.some(
      (tile) =>
        !!tile.onEnter && (tile.condition === undefined || !!tile.condition())
    )

    const existsInGrid =
      !!currentZone?.grid[profile.currentZone.y + y]?.[
        profile.currentZone.x + x
      ]

    return (eventExists || existsInGrid) && !npcExists && !scene
  }

  return (
    <aside className="gamepad">
      {Object.keys(coordinates).map((coordinate) => (
        <Fragment key={`gamepad-${coordinate}`}>
          {!!coordinates[coordinate] ? (
            <Button
              disabled={
                !canMoveToCoordinate({ ...coordinates[coordinate] }) ||
                !!game?.isWarping
              }
              onClick={() => setLocation({ ...coordinates[coordinate] })}
            >
              {coordinates[coordinate].icon}
            </Button>
          ) : (
            <div />
          )}
        </Fragment>
      ))}
    </aside>
  )
}
