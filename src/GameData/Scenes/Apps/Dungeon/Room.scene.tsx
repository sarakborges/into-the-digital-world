import type { DialogType } from '@/Types/Dialog.type'

import { NpcNavimon } from '@/GameData/Npcs/Navimon.npc'
import { findDungeon } from '@/GameData/Registries/Dungeon.registry'
import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { settleDungeonRoom } from '@/Helpers/Systems/Dungeon/settleDungeonRoom.helper'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const DungeonRoom = () => {
  const { dungeon } = useDungeonStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!dungeon) {
    return
  }

  const currentDungeon = findDungeon({
    zoneId: dungeon.zoneId,
    dungeonId: dungeon.dungeonId
  })
  const currentRoomId = dungeon.rooms.at(-1)
  const room = currentRoomId
    ? currentDungeon?.possibleRooms[currentRoomId]
    : undefined

  if (!currentDungeon || !currentRoomId || !room) {
    return
  }

  const isRoomDone = dungeon.doneRooms.length === dungeon.rooms.length
  const roomText = getTexts(room.description) || getTexts(room.name)
  const choices = Object.entries(
    (isRoomDone ? room.completionChoices : room.choices) ?? {}
  )

  const completeRoom = (event?: () => void) => {
    event?.()

    if (!useDungeonStore.getState().dungeon) {
      return
    }

    const settlement = settleDungeonRoom()

    if (settlement === 'nextRoom') {
      setScene({ component: DungeonChooseRoom })
    }
  }

  const options: DialogType['options'] = choices.length
    ? choices.map(([choiceId, choice]) => ({
        id: `scene-dungeon-room-${currentRoomId}-${choiceId}`,
        text: getTexts(choice.name),
        action: isRoomDone ? choice.event : () => completeRoom(choice.event)
      }))
    : isRoomDone
      ? undefined
      : [
          {
            id: `scene-dungeon-room-${currentRoomId}-continue`,
            text: getTexts('SCENES_CONTINUE_BUTTON'),
            action: () => completeRoom()
          }
        ]

  const dialogOptions: DialogType = {
    speaker: NpcNavimon,
    content: (
      <div className="text-bubble">
        <Text as="p">{roomText}</Text>
      </div>
    ),
    ...(options ? { options } : {})
  }

  return <Dialog {...dialogOptions} />
}
