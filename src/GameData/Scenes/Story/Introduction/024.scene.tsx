import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'

import { getTexts } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Data'
import { addNewQuest, updateQuestObjective } from '@/Helpers/Systems/Quests'
import { closeScene } from '@/Helpers/Systems/Scenes'

import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction024 = () => {
  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_024_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-028-confirm',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          updateQuestObjective({
            questId: AvatarFixingQuest.id,
            objectiveId: 'fixAvatar',
            objectiveValue: true
          })

          addNewQuest({ questId: StarterDigimonQuest.id })

          const currentProfile = useProfileStore.getState().profile

          const updatedProfile = {
            ...currentProfile!,
            currentScene: null
          }

          closeScene()

          saveSession(updatedProfile)
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
