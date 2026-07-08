import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'


import { AllNpcs } from '@/GameData/Npcs'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Introduction004 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile, setProfile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('INTRODUCTION_004_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-004-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setProfile({
            ...profile,
            npcAcquaintances: {
              ...(profile.npcAcquaintances ?? {}),
              [AllNpcs.general.gennai.id]: {}
            }
          })

          setScene({
            currentScene: 'introduction',
            currentStage: '005'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
