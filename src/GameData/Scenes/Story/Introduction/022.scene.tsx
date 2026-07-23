import type { DialogType } from '@/Types/Dialog.type'

import { Introduction023 } from '@/GameData/Scenes/Story/Introduction/023.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar/PlayerAvatar.component'

export const Introduction022 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <PlayerAvatar />

        <div className="text-bubble">
          <Text as="p">{getTexts('INTRODUCTION_022_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-026-confirm',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Introduction023 })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
