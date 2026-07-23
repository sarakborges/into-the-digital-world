import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { Introduction008 } from '@/GameData/Scenes/Story/Introduction/008.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction007 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: NpcGennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_007_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-007-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Introduction008 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
