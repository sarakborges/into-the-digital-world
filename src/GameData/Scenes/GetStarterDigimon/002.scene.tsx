import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { Portrait } from '@/Components/System/Portrait'

export const GetStarterDigimon002 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <>
        <Text as="p">{getDialogs('GETSTARTERDIGIMON_002_TEXT')}</Text>
        <Portrait
          alt={getDialogs('GETSTARTERDIGIMON_002_IMG')}
          src="/digimons/DORIMON.webp"
        />
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
            ...profile!,
            npcAcquintances: { ...profile!.npcAcquintances, dorimon: {} }
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
