import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { GetStarterDigimon010 } from '@/GameData/Scenes/Story/GetStarterDigimon/010.scene'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const GetStarterDigimon009 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: NpcGennai,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getTexts(`GETSTARTERDIGIMON_009_TEXT`, {
            '[NAME]': profile.name
          })}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-009-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: GetStarterDigimon010 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
