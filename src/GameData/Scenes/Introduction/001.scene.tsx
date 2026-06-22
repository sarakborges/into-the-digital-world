import type {DialogType} from '@/Types/Dialog.type'

import {useSceneStore} from '@/Stores/Scene.store'

import {IntroductionQuest} from '@/GameData/Quests/Introduction.quest'

import {getDialogs} from '@/Helpers/Language'
import {addNewQuest} from '@/Helpers/Systems/Quests'

import {Text} from '@/Components/DesignSystem/Text'

import {Dialog} from '@/Components/DesignSystem/Dialog'

export const Introduction001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('INTRODUCTION_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-001-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
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
