import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/Language'
import { advanceDungeon, leaveDungeon } from '@/Helpers/Systems/Dungeon'

import { useDungeonStore } from '@/Stores/Dungeon.store'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { AllDungeons } from '@/GameData/Dungeons'
import { Button } from '@/Components/DesignSystem/Button'

export const DungeonChooseRoom = () => {
  const { dungeon } = useDungeonStore((state) => state)

  if (!dungeon) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.navimon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          {dungeon.currentRoomsOptions.length === 1 && (
            <Text as="p">{getDialogs('DUNGEON_SINGLEROOM_TEXT')}</Text>
          )}

          {dungeon.currentRoomsOptions.length > 1 && (
            <Text as="p">{getDialogs('DUNGEON_CHOOSEROOM_TEXT')}</Text>
          )}
        </div>

        <div>
          <Text>Room Options: </Text>
        </div>

        <div className="dialog-reactions">
          {dungeon.currentRoomsOptions.map((roomId) => {
            const room =
              AllDungeons[dungeon.zoneId][dungeon.dungeonId].possibleRooms[
                roomId
              ]

            return (
              <div key={`scene-dungeon-chooseroom-room-${roomId}`}>
                <Button
                  style="secondary"
                  onClick={() => {
                    advanceDungeon(roomId)
                  }}
                >
                  {getDialogs(room.name)}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    ),

    options: [
      {
        id: 'scene-dungeon-chooseroom-giveup',
        text: getDialogs('SCENES_GIVEUP_BUTTON'),
        action: () => {
          leaveDungeon()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
