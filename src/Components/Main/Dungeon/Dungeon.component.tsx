import { useEffect } from 'react'

import { AllDungeons } from '@/GameData/Dungeons'

import { startBattle } from '@/Helpers/Systems/Battle'
import { getTranslation } from '@/Helpers/Language'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'

import './Dungeon.style.scss'

export const Dungeon = () => {
  const { dungeon } = useDungeonStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  if (!dungeon) {
    return
  }

  const currentDungeon = AllDungeons[dungeon.zoneId]?.[dungeon.dungeonId]
  const currentRoomIndex = dungeon.doneRooms.length
  const room = currentDungeon?.possibleRooms[dungeon.rooms[currentRoomIndex]]
  const shouldChooseRoom = !scene && dungeon.currentRoomsOptions.length > 0
  const shouldStartBattle = room?.type === 'battle' && !scene

  useEffect(() => {
    if (shouldChooseRoom) {
      setScene({
        currentScene: 'dungeon',
        currentStage: 'chooseRoom'
      })

      return
    }

    if (!shouldStartBattle) {
      return
    }

    if (!battle) {
      startBattle()

      setScene({
        currentScene: 'battle',
        currentStage: 'start'
      })

      return
    }

    setScene({
      currentScene: 'battle',
      currentStage: 'turn'
    })
  }, [battle, shouldChooseRoom, shouldStartBattle, setScene, scene])

  return (
    <div className="dungeon-container">
      <div>
        <Text>{getTranslation(currentDungeon?.name ?? '')}</Text>
      </div>

      {!!room && (
        <div>
          <Text>
            {getTranslation('DUNGEON_ROOM_NUMBER', {
              '[NUMBER]': String(dungeon.doneRooms.length + 1)
            })}
          </Text>
          <Text>{getTranslation(room.name)}</Text>
        </div>
      )}
    </div>
  )
}
