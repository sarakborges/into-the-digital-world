import type { DialogType } from '@/Types/Dialog.type'
import { AllScenes } from '@/GameData/Scenes'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Research001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.nanomon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('RESEARCH_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-research-001-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(AllScenes.research['002'])
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
