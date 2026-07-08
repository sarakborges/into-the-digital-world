import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { IntroductionQuest } from '@/GameData/Quests/Introduction.quest'

import { addNewQuest } from '@/Helpers/Systems/Quests'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Introduction001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('INTRODUCTION_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-001-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          addNewQuest({
            questId: IntroductionQuest.id,
            ignoreSession: true
          })

          setScene({
            currentScene: 'introduction',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
