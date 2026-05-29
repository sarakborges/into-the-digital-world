import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction025 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const digivice = useDigiviceStore((state) => state.digivice)
  const setDigivice = useDigiviceStore((state) => state.setDigivice)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('INTRODUCTION_025_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-025-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
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
