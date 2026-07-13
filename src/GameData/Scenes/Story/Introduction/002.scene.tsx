import type { DialogType } from '@/Types/Dialog.type'

import { AllScenes } from '@/GameData/Scenes'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction002 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getTexts('INTRODUCTION_002_ALT')}
          src="/npcs/gennai.webp"
        />

        <div className="text-bubble">
          <Text as="p">{getTexts('INTRODUCTION_002_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-002-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(AllScenes.introduction['003'])
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
