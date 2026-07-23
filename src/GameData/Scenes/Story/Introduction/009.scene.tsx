import type { DialogType } from '@/Types/Dialog.type'

import { Introduction010 } from '@/GameData/Scenes/Story/Introduction/010.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction009 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getTexts('INTRODUCTION_009_ALT')}
          src="/avatars/glitch.webp"
        />

        <div className="text-bubble">
          <Text as="p">{getTexts('INTRODUCTION_009_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-009-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Introduction010 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
