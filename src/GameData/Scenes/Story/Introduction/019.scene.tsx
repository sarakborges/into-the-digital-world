import { DigiviceItem } from '@/GameData/Items/Digivice.item'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { IntroductionQuest } from '@/GameData/Quests/Introduction.quest'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { addNewQuest } from '@/Helpers/Systems/Quests/addNewQuest.helper'
import { updateQuestObjective } from '@/Helpers/Systems/Quests/updateQuestObjective.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { SingleOptionDialog } from '@/Components/DesignSystem/SingleOptionDialog/SingleOptionDialog.component'

export const Introduction019 = () => {
  return (
    <SingleOptionDialog
      speaker={NpcGennai}
      optionId="scene-introduction-019-continue"
      text={getTexts('INTRODUCTION_019_TEXT')}
      onAction={() => {
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
      }}
    />
  )
}
