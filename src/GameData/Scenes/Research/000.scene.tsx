import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'


import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { saveSession } from '@/Helpers/Systems/Data'

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
        <Text as="p">{getTranslation('RESEARCH_000_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-research-000-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile,
            npcAcquaintances: {
              ...(profile.npcAcquaintances ?? {}),
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
