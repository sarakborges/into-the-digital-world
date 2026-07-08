import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTranslation } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const GetStarterDigimon003 = () => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.dorimon,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getTranslation('GETSTARTERDIGIMON_003_TEXT', {
            '[NAME]': profile.name
          })}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-003-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'getStarterDigimon',
            currentStage: '004'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
