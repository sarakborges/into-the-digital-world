import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/Language'

import { Text } from '@/DesignSystem/Text'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/Dialog'

export const GetStarterDigimon019 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.dorimon,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getDialogs(`GETSTARTERDIGIMON_019_TEXT`).replaceAll(
            '[NAME]',
            profile.name
          )}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-019-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '020'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
