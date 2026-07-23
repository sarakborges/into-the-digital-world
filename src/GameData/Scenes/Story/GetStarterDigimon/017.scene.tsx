import type { DialogType } from '@/Types/Dialog.type'

import { NpcDorimon } from '@/GameData/Npcs/Dorimon.npc'
import { GetStarterDigimon018 } from '@/GameData/Scenes/Story/GetStarterDigimon/018.scene'

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
    speaker: NpcDorimon,

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
          setScene({ component: GetStarterDigimon018 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
