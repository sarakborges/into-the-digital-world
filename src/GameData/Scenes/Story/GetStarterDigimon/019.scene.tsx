import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { updateQuestObjective } from '@/Helpers/Systems/Quests/updateQuestObjective.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const GetStarterDigimon019 = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: NpcGennai,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getTexts(`GETSTARTERDIGIMON_019_TEXT`, {
            '[NAME]': profile.name
          })}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-019-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
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
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
