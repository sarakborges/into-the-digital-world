import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllDungeons } from '@/GameData/Dungeons'

import { getDialogs } from '@/Helpers/Language'
import { advanceDungeon, leaveDungeon } from '@/Helpers/Systems/Dungeon'

import { useDungeonStore } from '@/Stores/Dungeon.store'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Button } from '@/Components/DesignSystem/Button'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

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

        <div className="dialog-reactions dialog-reactions-options">
          <div className="dungeon-paths">
            {dungeon.currentRoomsOptions.map((roomId) => {
              const room =
                AllDungeons[dungeon.zoneId][dungeon.dungeonId].possibleRooms[
                  roomId
                ]

              return (
                <div
                  key={`scene-dungeon-chooseroom-room-${roomId}`}
                  className="dungeon-path"
                >
                  <Text as="p">{getDialogs(room.description)}</Text>

                  <div>
                    <Button
                      style="secondary"
                      onClick={() => {
                        advanceDungeon(roomId)
                      }}
                    >
                      <AiOutlineExclamationCircle />
                      Follow this path
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="dungeon-path">
            <Text as="p">{getDialogs('DUNGEON_GIVEUP_DESCRIPTION')}</Text>

            <div>
              <Button
                style="secondary"
                onClick={() => {
                  leaveDungeon()
                }}
              >
                <AiOutlineExclamationCircle />

                {getDialogs('SCENES_GIVEUP_BUTTON')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <Dialog {...dialogOptions} />
}
