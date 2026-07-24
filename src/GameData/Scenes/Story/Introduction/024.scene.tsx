import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { addNewQuest } from '@/Helpers/Systems/Quests/addNewQuest.helper'
import { updateQuestObjective } from '@/Helpers/Systems/Quests/updateQuestObjective.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { SingleOptionDialog } from '@/Components/DesignSystem/SingleOptionDialog/SingleOptionDialog.component'

export const Introduction024 = () => {
  return (
    <SingleOptionDialog
      speaker={NpcGennai}
      optionId="scene-introduction-028-confirm"
      text={getTexts('INTRODUCTION_024_TEXT')}
      onAction={() => {
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
      }}
    />
  )
}
