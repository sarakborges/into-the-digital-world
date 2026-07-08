import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { AllNpcs } from '@/GameData/Npcs'


import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Introduction025 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('INTRODUCTION_025_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-025-confirm',
        text: getTranslation('SCENES_CONFIRM_BUTTON'),
        action: () => {
          setDigivice({ ...digivice, isOpen: false, currentApp: undefined })

          setScene({
            currentScene: 'introduction',
            currentStage: '026'
          })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
