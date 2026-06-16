import type { DialogType } from '@/Types/Dialog.type'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/Language'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { saveSession } from '@/Helpers/Systems/Profile'

export const Research000 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.nanomon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('RESEARCH_000_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-research-000-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile,
            npcAcquintances: {
              ...profile.npcAcquintances,
              nanomon: {}
            }
          }

          saveSession(updatedProfile)

          setScene({
            currentScene: 'research',
            currentStage: '001'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
