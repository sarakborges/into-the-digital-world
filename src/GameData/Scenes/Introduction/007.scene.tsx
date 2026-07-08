import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'


import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction007 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('INTRODUCTION_007_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-007-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '008'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
