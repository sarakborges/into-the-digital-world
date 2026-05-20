import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp
} from 'react-icons/fa'

import type { ZoneType } from '@/Types/Zone.type'

import { saveSession } from '@/Helpers/saveSession.helper'
import { generateRandomNumber } from '@/Helpers/generateRandomNumber.helper'

import * as Zones from '@/GameData/Zones'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useBattle } from '@/Hooks/Battle.hook'

import { Button } from '@/Components/System/Button'

import './Gamepad.style.scss'

export const Gamepad = () => {
  const { profile, setProfile } = useProfile()
  const { scene, setScene } = useScene()
  const { battle, setBattle } = useBattle()

  if (!profile) {
    return <></>
  }

  const currentZone: ZoneType = Zones[profile.currentZone.id]({
    scene,
    profile
  })

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

    const possibleSpawns = currentZone.grid[updatedY][
      updatedX
    ]?.possibleSpawns?.sort(() => Math.random() - 0.5)

    if (!!possibleSpawns) {
      const enemiesSpawned: Array<string> = []

      for (let spawn of possibleSpawns) {
        if (
          enemiesSpawned.length >=
          (currentZone.grid[updatedY][updatedX]!.maxEnemies || 3)
        ) {
          break
        }

        const rng = generateRandomNumber({ min: 0, max: 100 })

        if (rng < spawn.spawningChance) {
          enemiesSpawned.push(spawn.id)
        }
      }

      if (enemiesSpawned.length > 0) {
        setScene({
          currentScene: 'battle',
          currentStage: 'start'
        })

        setBattle({
          enemies: enemiesSpawned
        })
      }

      return
    }

    saveSession({ key: 'profile', value: updatedProfile })

    const currentTile = currentZone.tiles.find(
      (tile) =>
        tile.x === updatedX &&
        tile.y === updatedY &&
        (!!tile.condition || tile.condition === undefined)
    )

    if (!!currentTile?.event) {
      currentZone.events?.[currentTile?.event]({
        profile: updatedProfile,
        setProfile,
        setScene,
        scene
      })

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
    prevX: currentZone.tiles.find(
      (tile) =>
        tile.x === profile.currentZone.x - 1 && tile.y === profile.currentZone.y
    ),

    nextX: currentZone.tiles.find(
      (tile) =>
        tile.x === profile.currentZone.x + 1 && tile.y === profile.currentZone.y
    ),

    prevY: currentZone.tiles.find(
      (tile) =>
        tile.x === profile.currentZone.x && tile.y === profile.currentZone.y - 1
    ),

    nextY: currentZone.tiles.find(
      (tile) =>
        tile.x === profile.currentZone.x && tile.y === profile.currentZone.y + 1
    )
  }

  const npcExistsInPrevX = !!surroundingTiles.prevX?.npc
  const npcExistsInNextX = !!surroundingTiles.nextX?.npc
  const npcExistsInPrevY = !!surroundingTiles.prevY?.npc
  const npcExistsInNextY = !!surroundingTiles.nextY?.npc

  const eventExistsInPrevX = !!surroundingTiles.prevX?.event
  const eventExistsInNextX = !!surroundingTiles.nextX?.event
  const eventExistsInPrevY = !!surroundingTiles.prevY?.event
  const eventExistsInNextY = !!surroundingTiles.nextY?.event

  const canMovePrevX =
    (existsInGrid.prevX || eventExistsInPrevX) && !npcExistsInPrevX

  const canMoveNextX =
    (existsInGrid.nextX || eventExistsInNextX) && !npcExistsInNextX

  const canMovePrevY =
    (eventExistsInPrevY || existsInGrid.prevY) && !npcExistsInPrevY

  const canMoveNextY =
    (eventExistsInNextY || existsInGrid.nextY) && !npcExistsInNextY

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
