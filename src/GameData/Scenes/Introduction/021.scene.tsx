import type {DialogType} from '@/Types/Dialog.type'

import {getDialogs} from '@/Helpers/Language'
import {addNewQuest, updateQuestObjective} from '@/Helpers/Systems/Quests'
import {saveSession} from '@/Helpers/Systems/Data'

import {AllItems} from '@/GameData/Items'
import {AllNpcs} from '@/GameData/Npcs'
import {AvatarFixingQuest} from '@/GameData/Quests/AvatarFixing.quest'
import {IntroductionQuest} from '@/GameData/Quests/Introduction.quest'

import {useProfileStore} from '@/Stores/Profile.store'
import {useSceneStore} from '@/Stores/Scene.store'

import {Text} from '@/Components/DesignSystem/Text'

import {Dialog} from '@/Components/DesignSystem/Dialog'

export const Introduction021 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('INTRODUCTION_021_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-021-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(null)

          addNewQuest({ questId: AvatarFixingQuest.id })

          updateQuestObjective({
            questId: IntroductionQuest.id,
            objectiveId: 'completeTutorial',
            objectiveValue: true
          })

          const currentProfile = useProfileStore.getState().profile

          const updatedProfile = {
            ...currentProfile!,
            currentScene: null,
            items: {
              [AllItems.digivice?.id]: 1
            }
          }

          saveSession(updatedProfile)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
