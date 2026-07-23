import { useEffect } from 'react'

import { AllDungeons } from '@/GameData/Dungeons'
import { BattleStart } from '@/GameData/Scenes/Apps/Battle/BattleStart.scene'
import { BattleTurn } from '@/GameData/Scenes/Apps/Battle/BattleTurn.scene'
import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { getTexts } from '@/Helpers/Language'
import { startBattle } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'

import './Dungeon.style.scss'

export const Dungeon = () => {
  const { dungeon } = useDungeonStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  const currentDungeon = dungeon
    ? AllDungeons[dungeon.zoneId]?.[dungeon.dungeonId]
    : undefined
  const currentRoomIndex = dungeon?.doneRooms.length ?? 0
  const room =
    currentDungeon?.possibleRooms[dungeon?.rooms[currentRoomIndex] ?? ''] ??
    undefined
  const shouldChooseRoom =
    !!dungeon && !scene && dungeon.currentRoomsOptions.length > 0
  const shouldStartBattle = room?.type === 'battle' && !scene

  useEffect(() => {
    if (!dungeon) {
      return
    }

    if (shouldChooseRoom) {
      setScene({ component: DungeonChooseRoom })

      return
    }

    if (!shouldStartBattle) {
      return
    }

    if (!battle) {
      startBattle()

      setScene({ component: BattleStart })

      return
    }

    setScene({ component: BattleTurn })
  }, [battle, dungeon, scene, shouldChooseRoom, shouldStartBattle, setScene])

  if (!dungeon) {
    return
  }

  return (
    <div className="dungeon-container">
      <div>
        <Text>{getTexts(currentDungeon?.name ?? '')}</Text>
      </div>

      {!!room && (
        <div>
          <Text>
            {getTexts('DUNGEON_ROOM_NUMBER', {
              '[NUMBER]': String(dungeon.doneRooms.length + 1)
            })}
          </Text>
          <Text>{getTexts(room.name)}</Text>
        </div>
      )}
    </div>
  )
}
