import type { DialogType } from '@/Types/Dialog.type'

import { Introduction011 } from '@/GameData/Scenes/Story/Introduction/011.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Introduction010 = () => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: { ...profile, isPlayer: true },

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_010_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-010-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Introduction011 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
