import type {DialogType} from '@/Types/Dialog.type'

import {useSceneStore} from '@/Stores/Scene.store'

import {getDialogs} from '@/Helpers/Language'

import {AllNpcs} from '@/GameData/Npcs'

import {Text} from '@/Components/DesignSystem/Text'

import {Dialog} from '@/Components/DesignSystem/Dialog'

export const Introduction003 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('INTRODUCTION_003_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-003-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '004'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
