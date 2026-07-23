import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { Location001 } from '@/GameData/Scenes/Apps/Location/001.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Location000 = () => {
  const { setScene } = useSceneStore((state) => state)

  const triggerLocation = () => {
    setScene({ component: Location001 })
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

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
