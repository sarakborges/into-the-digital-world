import type { DialogType } from '@/Types/Dialog.type'

import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'
import { Introduction021 } from '@/GameData/Scenes/Story/Introduction/021.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction020 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: NpcDressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_020_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-020-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Introduction021 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
