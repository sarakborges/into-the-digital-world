import { useEffect } from 'react'

import { AllDungeons } from '@/GameData/Dungeons'

import { getDialogs } from '@/Helpers/Language'

import { leaveDungeon } from '@/Helpers/Systems/Dungeon'
import { startBattle } from '@/Helpers/Systems/Battle'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'
import { Button } from '@/Components/DesignSystem/Button'

import './Dungeon.style.scss'

export const Dungeon = () => {
  const { dungeon } = useDungeonStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)

  useEffect(() => {
    if (!dungeon) {
      return
    }

    const currentRoom = dungeon.doneRooms.length

    if (
      (dungeon.rooms[currentRoom] === 'random' ||
        dungeon.rooms[currentRoom] === 'boss') &&
      !battle
    ) {
      startBattle()
    }

    if (!scene) {
      setScene({
        currentScene: 'battle',
        currentStage: 'turn'
      })
    }
  }, [dungeon?.doneRooms])

  if (!dungeon) {
    return
  }

  const currentDungeon = AllDungeons[dungeon.zoneId]?.[dungeon.dungeonId]
  const currentRoom = dungeon.doneRooms.length
  const room = currentDungeon?.possibleRooms[dungeon.rooms[currentRoom]]

  return (
    <div className="dungeon-container">
      <div>
        <Text>{getDialogs(currentDungeon.name)}</Text>
      </div>

      <div>
        <Text>{getDialogs(room.name)}</Text>
      </div>

      <div>
        <Button onClick={leaveDungeon}>Give up</Button>
      </div>
    </div>
  )
}
