import type { DialogType } from '@/Types/Dialog.type'

import { IntroductionQuest } from '@/GameData/Quests/Introduction.quest'
import { Introduction002 } from '@/GameData/Scenes/Story/Introduction/002.scene'

import { getTexts } from '@/Helpers/Language'
import { addNewQuest } from '@/Helpers/Systems/Quests'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-001-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          addNewQuest({
            questId: IntroductionQuest.id,
            ignoreSession: true
          })

          setScene({ component: Introduction002 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
