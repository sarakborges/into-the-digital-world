import type { DialogType } from '@/Types/Dialog.type'

import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'
import { Introduction022 } from '@/GameData/Scenes/Story/Introduction/022.scene'

import { getTexts } from '@/Helpers/Language'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction021 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: NpcDressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_021_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-025-confirm',
        text: getTexts('SCENES_CONFIRM_BUTTON'),
        action: () => {
          setDigivice({ ...digivice, isOpen: false, currentApp: undefined })

          setScene({ component: Introduction022 })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
