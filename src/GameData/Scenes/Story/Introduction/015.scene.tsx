import type { DialogType } from '@/Types/Dialog.type'

import { Introduction016 } from '@/GameData/Scenes/Story/Introduction/016.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Introduction015 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: { ...profile, isPlayer: true },

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_015_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-introduction-015-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Introduction016 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
