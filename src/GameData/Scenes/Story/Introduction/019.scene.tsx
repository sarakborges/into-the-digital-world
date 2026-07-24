import type { DialogType } from '@/Types/Dialog.type'

import { DigiviceItem } from '@/GameData/Items/Digivice.item'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { IntroductionQuest } from '@/GameData/Quests/Introduction.quest'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { addNewQuest } from '@/Helpers/Systems/Quests/addNewQuest.helper'
import { updateQuestObjective } from '@/Helpers/Systems/Quests/updateQuestObjective.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Introduction019 = () => {
  const dialogOptions: DialogType = {
    speaker: NpcGennai,

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

          setProfileSession((profile) => ({
            ...profile,
            currentScene: null,
            items: {
              [DigiviceItem.id]: 1
            }
          }))
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
