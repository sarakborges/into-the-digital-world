import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'
import { IntroductionQuest } from '@/GameData/Quests/Introduction.quest'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'
import { addNewQuest } from '@/Helpers/addNewQuest.helper'
import { updateQuestObjective } from '@/Helpers/updateQuestObjective.helper'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction028 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { setProfile } = useProfileStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('INTRODUCTION_028_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-028-confirm',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          addNewQuest(IntroductionQuest.id)
          updateQuestObjective({
            questId: IntroductionQuest.id,
            objectiveId: 'completeTutorial',
            objectiveValue: true
          })

          addNewQuest(StarterDigimonQuest.id)

          const currentProfile = useProfileStore.getState().profile

          const updatedProfile = {
            ...currentProfile!,
            currentScene: null
          }

          setScene(null)

          setProfile(updatedProfile)
          saveSession({
            key: 'profile',
            value: updatedProfile
          })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
