import { AiOutlineExclamationCircle } from 'react-icons/ai'

import type { DialogType } from '@/Types/Dialog.type'

import { NpcNavimon } from '@/GameData/Npcs/Navimon.npc'
import { getDungeon } from '@/GameData/Registries/Dungeon.registry'

import { getTexts } from '@/Helpers/Language'
import { advanceDungeon } from '@/Helpers/Systems/Dungeon/advanceDungeon.helper'
import { leaveDungeon } from '@/Helpers/Systems/Dungeon/leaveDungeon.helper'

import { useDungeonStore } from '@/Stores/Dungeon.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const DungeonChooseRoom = () => {
  const { dungeon } = useDungeonStore((state) => state)

  if (!dungeon) {
    return
  }

  const currentDungeon = getDungeon({
    zoneId: dungeon.zoneId,
    dungeonId: dungeon.dungeonId
  })

  const dialogOptions: DialogType = {
    speaker: NpcNavimon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          {dungeon.currentRoomsOptions.length === 1 && (
            <Text as="p">{getTexts('DUNGEON_SINGLEROOM_TEXT')}</Text>
          )}

          {dungeon.currentRoomsOptions.length > 1 && (
            <Text as="p">{getTexts('DUNGEON_CHOOSEROOM_TEXT')}</Text>
          )}
        </div>

        <div className="dialog-reactions dialog-reactions-options">
          <div className="dungeon-paths">
            {dungeon.currentRoomsOptions.map((roomId) => {
              const room = currentDungeon.possibleRooms[roomId]

              return (
                <div
                  key={`scene-dungeon-chooseroom-room-${roomId}`}
                  className="dungeon-path"
                >
                  <Text as="p">{getTexts(room.description)}</Text>

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
            <Text as="p">{getTexts('DUNGEON_GIVEUP_DESCRIPTION')}</Text>

            <div>
              <Button
                onClick={() => {
                  leaveDungeon()
                }}
              >
                <AiOutlineExclamationCircle />

                {getTexts('SCENES_GIVEUP_BUTTON')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <Dialog {...dialogOptions} />
}
