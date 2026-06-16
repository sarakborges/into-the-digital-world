import type { ProfileType } from '@/Types/Profile.type'
import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'

import { getDialogs } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Profile'
import { updateQuestObjective } from '@/Helpers/Systems/Quests'

import { Text } from '@/Components/System/Text'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon021 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile, setProfile } = useProfileStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getDialogs(`GETSTARTERDIGIMON_021_TEXT`).replaceAll(
            '[NAME]',
            profile?.name
          )}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-021-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
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

          setProfile(updatedProfile)
          saveSession({
            key: 'profile',
            value: updatedProfile
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
