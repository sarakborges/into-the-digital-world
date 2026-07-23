import type { DialogType } from '@/Types/Dialog.type'

import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'
import { AvatarCustomization003 } from '@/GameData/Scenes/Apps/AvatarCustomization/003.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const AvatarCustomization000 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: NpcDressmon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('AVATARCUSTOMIZATION_000_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-avatarCustomization-000-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: AvatarCustomization003 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
