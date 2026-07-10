import { AiOutlineExclamationCircle } from 'react-icons/ai'

import type { DialogType } from '@/Types/Dialog.type'

import { AllDungeons } from '@/GameData/Dungeons'
import { AllNpcs } from '@/GameData/Npcs'

import { getTranslation } from '@/Helpers/Language'
import { advanceDungeon, leaveDungeon } from '@/Helpers/Systems/Dungeon'

import { useDungeonStore } from '@/Stores/Dungeon.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

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
            <Text as="p">{getTranslation('DUNGEON_SINGLEROOM_TEXT')}</Text>
          )}

          {dungeon.currentRoomsOptions.length > 1 && (
            <Text as="p">{getTranslation('DUNGEON_CHOOSEROOM_TEXT')}</Text>
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
                  <Text as="p">{getTranslation(room.description)}</Text>

                  <div>
                    <Button
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
            <Text as="p">{getTranslation('DUNGEON_GIVEUP_DESCRIPTION')}</Text>

            <div>
              <Button
                onClick={() => {
                  leaveDungeon()
                }}
              >
                <AiOutlineExclamationCircle />

                {getTranslation('SCENES_GIVEUP_BUTTON')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <Dialog {...dialogOptions} />
}
