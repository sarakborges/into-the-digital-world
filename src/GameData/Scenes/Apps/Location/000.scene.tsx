import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { Location001 } from '@/GameData/Scenes/Apps/Location/001.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Location000 = () => {
  const { setScene } = useSceneStore((state) => state)

  const triggerLocation = () => {
    setScene({ component: Location001 })
  }

  const dialogOptions: DialogType = {
    speaker: NpcGennai,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">{getTexts('ROOTDOMAIN_GENNAI_DEFAULT')}</Text>
        </div>

        <div className="dialog-reactions">
          <div>
            <Button onClick={triggerLocation}>
              <HiOutlineChatBubbleLeftEllipsis />
              <Text>{getTexts('ROOTDOMAIN_LOCATION_TRIGGER')}</Text>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return <Dialog {...dialogOptions} />
}
