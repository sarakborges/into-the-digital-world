import type { DialogType } from '@/Types/Dialog.type'
import type { ProfileType } from '@/Types/Profile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'

import { getTexts } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Data'
import { updateQuestObjective } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const GetStarterDigimon021 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getTexts(`GETSTARTERDIGIMON_021_TEXT`, {
            '[NAME]': profile.name
          })}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-021-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          updateQuestObjective({
            questId: StarterDigimonQuest.id,
            objectiveId: 'talkToGennai',
            objectiveValue: true
          })

          const currentProfile = useProfileStore.getState().profile

          const updatedProfile: ProfileType = {
            ...currentProfile!,
            party: [1],
            partnerDigimons: {
              1: {
                id: 1,
                baseDigimon: 'dorimon',
                isStarter: true,
                equipments: {}
              }
            }
          }

          setScene(null)
          saveSession(updatedProfile)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
