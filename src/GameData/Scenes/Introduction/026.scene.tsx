import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/DesignSystem/Text'

import { Dialog } from '@/Components/Dialog'
import { PlayerAvatar } from '@/Components/PlayerAvatar'

export const Introduction026 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <PlayerAvatar />

        <div className="text-bubble">
          <Text as="p">{getDialogs('INTRODUCTION_026_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-026-confirm',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '027'
          })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
