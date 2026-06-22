import type {DialogType} from '@/Types/Dialog.type'

import {AllNpcs} from '@/GameData/Npcs'

import {getDialogs} from '@/Helpers/Language'

import {useSceneStore} from '@/Stores/Scene.store'
import {useDigiviceStore} from '@/Stores/Digivice.store'

import {Text} from '@/Components/DesignSystem/Text'

import {Dialog} from '@/Components/DesignSystem/Dialog'

export const Introduction025 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

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
