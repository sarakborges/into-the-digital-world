import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { Portrait } from '@/Components/System/Portrait'

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
          alt={getDialogs('GETSTARTERDIGIMON_002_IMG')}
          src="/digimons/dorimon.webp"
        />

        <div className="text-bubble">
          <Text as="p">{getDialogs('GETSTARTERDIGIMON_002_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-002-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '003'
          })

          setProfile({
            ...profile,
            npcAcquaintances: { ...profile.npcAcquaintances, dorimon: {} }
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
