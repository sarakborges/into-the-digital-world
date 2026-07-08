import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'


import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Introduction016 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('INTRODUCTION_016_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-016-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '017'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
