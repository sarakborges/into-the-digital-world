import type { DialogType } from '@/Types/Dialog.type'

import { Introduction018 } from '@/GameData/Scenes/Story/Introduction/018.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Introduction017 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: { ...profile, isPlayer: true },

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_017_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-017-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Introduction018 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
