import type { DialogType } from '@/Types/Dialog.type'
import { AllScenes } from '@/GameData/Scenes'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const GetStarterDigimon017 = () => {
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
          {getTexts(`GETSTARTERDIGIMON_017_TEXT`, {
            '[NAME]': profile.name
          })}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-017-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(AllScenes.getStarterDigimon['018'])
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
