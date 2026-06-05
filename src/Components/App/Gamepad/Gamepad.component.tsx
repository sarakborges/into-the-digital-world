import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp
} from 'react-icons/fa'

import type { ZoneType } from '@/Types/Zone.type'

import { saveSession } from '@/Helpers/saveSession.helper'
import { startBattle } from '@/Helpers/startBattle.helper'

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

    saveSession({ key: 'profile', value: updatedProfile })

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

  const surroundingTilesPositions = {
    prevX: profile.currentZone.x - 1,
    nextX: profile.currentZone.x + 1,
    prevY: profile.currentZone.y - 1,
    nextY: profile.currentZone.y + 1
  }

  const existsInGrid = {
    prevX:
      !!currentZone?.grid[profile.currentZone.y]?.[
        surroundingTilesPositions.prevX
      ],
    nextX:
      !!currentZone?.grid[profile.currentZone.y]?.[
        surroundingTilesPositions.nextX
      ],
    prevY:
      !!currentZone?.grid[surroundingTilesPositions.prevY]?.[
        profile.currentZone.x
      ],
    nextY:
      !!currentZone?.grid[surroundingTilesPositions.nextY]?.[
        profile.currentZone.x
      ]
  }

  const surroundingTiles = {
    prevX: currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x - 1 && tile.y === profile.currentZone.y
    ),

    nextX: currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x + 1 && tile.y === profile.currentZone.y
    ),

    prevY: currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x && tile.y === profile.currentZone.y - 1
    ),

    nextY: currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x && tile.y === profile.currentZone.y + 1
    )
  }

  const npcExistsInPrevX = !!surroundingTiles.prevX?.some(
    (tile) => !!tile.npc && (tile.condition === undefined || !!tile.condition())
  )
  const npcExistsInNextX = !!surroundingTiles.nextX?.some(
    (tile) => !!tile.npc && (tile.condition === undefined || !!tile.condition())
  )
  const npcExistsInPrevY = !!surroundingTiles.prevY?.some(
    (tile) => !!tile.npc && (tile.condition === undefined || !!tile.condition())
  )
  const npcExistsInNextY = !!surroundingTiles.nextY?.some(
    (tile) => !!tile.npc && (tile.condition === undefined || !!tile.condition())
  )

  const eventExistsInPrevX = !!surroundingTiles.prevX?.some(
    (tile) =>
      !!tile.onEnter && (tile.condition === undefined || !!tile.condition())
  )
  const eventExistsInNextX = !!surroundingTiles.nextX?.some(
    (tile) =>
      !!tile.onEnter && (tile.condition === undefined || !!tile.condition())
  )
  const eventExistsInPrevY = !!surroundingTiles.prevY?.some(
    (tile) =>
      !!tile.onEnter && (tile.condition === undefined || !!tile.condition())
  )
  const eventExistsInNextY = !!surroundingTiles.nextY?.some(
    (tile) =>
      !!tile.onEnter && (tile.condition === undefined || !!tile.condition())
  )

  const canMovePrevX =
    (existsInGrid.prevX || eventExistsInPrevX) && !npcExistsInPrevX && !scene

  const canMoveNextX =
    (existsInGrid.nextX || eventExistsInNextX) && !npcExistsInNextX && !scene

  const canMovePrevY =
    (eventExistsInPrevY || existsInGrid.prevY) && !npcExistsInPrevY && !scene

  const canMoveNextY =
    (eventExistsInNextY || existsInGrid.nextY) && !npcExistsInNextY && !scene

  return (
    <aside className="gamepad">
      <div className="gamepad-row">
        <div className="gamepad-col">
          <Button
            disabled={!canMovePrevY || !!game?.isWarping}
            onClick={() => setLocation({ y: -1 })}
          >
            <FaArrowUp />
          </Button>
        </div>
      </div>

      <div className="gamepad-row">
        <div className="gamepad-col">
          <Button
            disabled={!canMovePrevX || !!game?.isWarping}
            onClick={() => setLocation({ x: -1 })}
          >
            <FaArrowLeft />
          </Button>
        </div>

        <div className="gamepad-col" />

        <div className="gamepad-col">
          <Button
            disabled={!canMoveNextX || !!game?.isWarping}
            onClick={() => setLocation({ x: +1 })}
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>

      <div className="gamepad-row">
        <div className="gamepad-col">
          <Button
            disabled={!canMoveNextY || !!game?.isWarping}
            onClick={() => setLocation({ y: +1 })}
          >
            <FaArrowDown />
          </Button>
        </div>
      </div>
    </aside>
  )
}
