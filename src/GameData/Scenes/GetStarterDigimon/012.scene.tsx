import type {DialogType} from '@/Types/Dialog.type'

import {AllNpcs} from '@/GameData/Npcs'

import {getDialogs} from '@/Helpers/Language'

import {Text} from '@/Components/DesignSystem/Text'

import {useSceneStore} from '@/Stores/Scene.store'

import {Dialog} from '@/Components/DesignSystem/Dialog'

export const GetStarterDigimon012 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs(`GETSTARTERDIGIMON_012_TEXT`)}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-012-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '013'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
