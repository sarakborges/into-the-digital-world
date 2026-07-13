import type { DialogType } from '@/Types/Dialog.type'

import { AllItems } from '@/GameData/Items'
import { AllNpcs } from '@/GameData/Npcs'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { IntroductionQuest } from '@/GameData/Quests/Introduction.quest'

import { getTexts } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Data'
import { addNewQuest, updateQuestObjective } from '@/Helpers/Systems/Quests'
import { closeScene } from '@/Helpers/Systems/Scenes'

import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction019 = () => {
  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_019_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-019-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          closeScene()

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
