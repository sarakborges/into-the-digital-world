import { useEffect } from 'react'

import { findDungeon } from '@/GameData/Registries/Dungeon.registry'
import { BattleStart } from '@/GameData/Scenes/Apps/Battle/BattleStart.scene'
import { BattleTurn } from '@/GameData/Scenes/Apps/Battle/BattleTurn.scene'
import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'
import { DungeonRoom } from '@/GameData/Scenes/Apps/Dungeon/Room.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { startBattle } from '@/Helpers/Systems/Battle/startBattle.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Main/Dungeon/Dungeon.style.scss'

export const Dungeon = () => {
  const { dungeon } = useDungeonStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  const currentDungeon = dungeon
    ? findDungeon({
        zoneId: dungeon.zoneId,
        dungeonId: dungeon.dungeonId
      })
    : undefined
  const lastRoomIndex = Math.max((dungeon?.rooms.length ?? 1) - 1, 0)
  const currentRoomIndex = Math.min(
    dungeon?.doneRooms.length ?? 0,
    lastRoomIndex
  )
  const room =
    currentDungeon?.possibleRooms[dungeon?.rooms[currentRoomIndex] ?? ''] ??
    undefined
  const isCurrentRoomDone =
    !!dungeon && dungeon.doneRooms.length > currentRoomIndex
  const shouldChooseRoom =
    !!dungeon && !scene && dungeon.currentRoomsOptions.length > 0
  const shouldOpenRoomDialog =
    !!dungeon &&
    !!room &&
    !scene &&
    !battle &&
    ((room.type === 'event' && !isCurrentRoomDone) ||
      (isCurrentRoomDone &&
        !!room.choices &&
        dungeon.currentRoomsOptions.length === 0))
  const shouldStartBattle =
    room?.type === 'battle' && !scene && !isCurrentRoomDone

  useEffect(() => {
    if (!dungeon) {
      return
    }

    if (shouldChooseRoom) {
      setScene({ component: DungeonChooseRoom })

      return
    }

    if (shouldOpenRoomDialog) {
      setScene({ component: DungeonRoom })

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
  }, [
    battle,
    dungeon,
    scene,
    setScene,
    shouldChooseRoom,
    shouldOpenRoomDialog,
    shouldStartBattle
  ])

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
              '[NUMBER]': String(currentRoomIndex + 1)
            })}
          </Text>
          <Text>{getTexts(room.name)}</Text>
        </div>
      )}
    </div>
  )
}
