import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { Introduction005 } from '@/GameData/Scenes/Story/Introduction/005.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Introduction004 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile, setProfile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: NpcGennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_004_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-004-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setProfile({
            ...profile,
            npcAcquaintances: {
              ...(profile.npcAcquaintances ?? {}),
              [NpcGennai.id]: {}
            }
          })

          setScene({ component: Introduction005 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
