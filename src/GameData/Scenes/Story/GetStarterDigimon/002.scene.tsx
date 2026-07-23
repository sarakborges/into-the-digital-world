import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { GetStarterDigimon003 } from '@/GameData/Scenes/Story/GetStarterDigimon/003.scene'

import { getTexts } from '@/Helpers/Language'

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
    speaker: NpcGennai,

    content: (
      <>
        <Portrait
          alt={getTexts('GETSTARTERDIGIMON_002_IMG')}
          src="/digimons/dorimon.webp"
        />

        <div className="text-bubble">
          <Text as="p">{getTexts('GETSTARTERDIGIMON_002_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-002-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: GetStarterDigimon003 })

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
