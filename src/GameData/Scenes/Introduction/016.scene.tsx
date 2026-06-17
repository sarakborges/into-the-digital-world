import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language'

import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/DesignSystem/Text'

import { Dialog } from '@/Components/Dialog'

export const Introduction016 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('INTRODUCTION_016_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-016-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
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
