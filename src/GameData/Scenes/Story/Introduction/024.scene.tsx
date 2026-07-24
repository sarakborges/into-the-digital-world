import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { addNewQuest } from '@/Helpers/Systems/Quests/addNewQuest.helper'
import { updateQuestObjective } from '@/Helpers/Systems/Quests/updateQuestObjective.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Introduction024 = () => {
  const dialogOptions: DialogType = {
    speaker: NpcGennai,

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
          setProfileSession((profile) => ({
            ...profile,
            currentScene: null
          }))

          closeScene()
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
