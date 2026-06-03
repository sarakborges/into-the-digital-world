import type { DialogType } from '@/Types/Dialog.type'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { saveSession } from '@/Helpers/saveSession.helper'

export const Compose000 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile, setProfile } = useProfileStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.jijimon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('COMPOSE_000_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-compose-000-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile!,
            npcAcquintances: {
              ...profile!.npcAcquintances,
              jijimon: {}
            }
          }

          saveSession({ key: 'profile', value: updatedProfile })
          setProfile(updatedProfile)

          setScene({
            currentScene: 'compose',
            currentStage: '001'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
