import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllScenes } from '@/GameData/Scenes'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction014 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_014_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-014-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(AllScenes.introduction['015'])
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
