import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTranslation } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

export const GetStarterDigimon002 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile, setProfile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <>
        <Portrait
          alt={getTranslation('GETSTARTERDIGIMON_002_IMG')}
          src="/digimons/dorimon.webp"
        />

        <div className="text-bubble">
          <Text as="p">{getTranslation('GETSTARTERDIGIMON_002_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-002-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '003'
          })

          setProfile({
            ...profile,
            npcAcquaintances: {
              ...(profile.npcAcquaintances ?? {}),
              dorimon: {}
            }
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
