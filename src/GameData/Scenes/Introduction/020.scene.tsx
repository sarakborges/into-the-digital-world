import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language'

import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/DesignSystem/Text'

import { Dialog } from '@/Components/Dialog'

export const Introduction020 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('INTRODUCTION_020_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-020-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '021'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
