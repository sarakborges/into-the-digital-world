import { AiOutlineExclamationCircle } from 'react-icons/ai'

import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { GetStarterDigimon001 } from '@/GameData/Scenes/Story/GetStarterDigimon/001.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const GetStarterDigimon000 = () => {
  const { setScene } = useSceneStore((state) => state)

  const triggerGetStarterDigimon = () => {
    setScene({ component: GetStarterDigimon001 })
  }

  const dialogOptions: DialogType = {
    speaker: NpcGennai,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">{getTexts('ROOTDOMAIN_GENNAI_DEFAULT')}</Text>
        </div>

        <div className="dialog-reactions">
          <Button onClick={triggerGetStarterDigimon}>
            <AiOutlineExclamationCircle />
            <Text>{getTexts('ROOTDOMAIN_GETSTARTERDIGIMON_TRIGGER')}</Text>
          </Button>
        </div>
      </div>
    )
  }

  return <Dialog {...dialogOptions} />
}
