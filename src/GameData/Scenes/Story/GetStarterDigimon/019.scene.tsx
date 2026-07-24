import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { updateQuestObjective } from '@/Helpers/Systems/Quests/updateQuestObjective.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import { SingleOptionDialog } from '@/Components/DesignSystem/SingleOptionDialog/SingleOptionDialog.component'

export const GetStarterDigimon019 = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  return (
    <SingleOptionDialog
      speaker={NpcGennai}
      optionId="scene-getstarterdigimon-019-continue"
      text={getTexts('GETSTARTERDIGIMON_019_TEXT', {
        '[NAME]': profile.name
      })}
      onAction={() => {
        updateQuestObjective({
          questId: StarterDigimonQuest.id,
          objectiveId: 'talkToGennai',
          objectiveValue: true
        })

        setProfileSession((currentProfile) => ({
          ...currentProfile,
          party: [1],
          partnerDigimons: {
            1: {
              id: 1,
              baseDigimon: 'dorimon',
              isStarter: true,
              equipments: {}
            }
          }
        }))

        closeScene()
      }}
    />
  )
}
