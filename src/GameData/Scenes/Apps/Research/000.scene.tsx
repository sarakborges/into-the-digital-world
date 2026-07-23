import type { DialogType } from '@/Types/Dialog.type'

import { NpcNanomon } from '@/GameData/Npcs/Nanomon.npc'
import { Research001 } from '@/GameData/Scenes/Apps/Research/001.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Research000 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: NpcNanomon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('RESEARCH_000_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-research-000-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile,
            npcAcquaintances: {
              ...(profile.npcAcquaintances ?? {}),
              nanomon: {}
            }
          }

          saveSession(updatedProfile)

          setScene({ component: Research001 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
