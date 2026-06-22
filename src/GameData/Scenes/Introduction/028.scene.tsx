import type {DialogType} from '@/Types/Dialog.type'

import {AllNpcs} from '@/GameData/Npcs'
import {StarterDigimonQuest} from '@/GameData/Quests/StarterDigimon.quest'
import {AvatarFixingQuest} from '@/GameData/Quests/AvatarFixing.quest'

import {getDialogs} from '@/Helpers/Language'
import {saveSession} from '@/Helpers/Systems/Data'
import {addNewQuest, updateQuestObjective} from '@/Helpers/Systems/Quests'

import {useSceneStore} from '@/Stores/Scene.store'
import {useProfileStore} from '@/Stores/Profile.store'

import {Text} from '@/Components/DesignSystem/Text'

import {Dialog} from '@/Components/DesignSystem/Dialog'

export const Introduction028 = () => {
  const { setScene } = useSceneStore((state) => state)

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

          setScene(null)
          saveSession(updatedProfile)
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
