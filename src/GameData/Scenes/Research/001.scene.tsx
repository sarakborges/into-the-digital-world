import type {DialogType} from '@/Types/Dialog.type'

import {useSceneStore} from '@/Stores/Scene.store'

import {AllNpcs} from '@/GameData/Npcs'

import {getDialogs} from '@/Helpers/Language'

import {Text} from '@/Components/DesignSystem/Text'

import {Dialog} from '@/Components/DesignSystem/Dialog'

export const Research001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.nanomon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('RESEARCH_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-research-001-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'research',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
