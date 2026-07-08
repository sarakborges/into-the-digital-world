import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'


import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Introduction024 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('INTRODUCTION_024_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-024-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'avatarCustomization',
            currentStage: '001'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
