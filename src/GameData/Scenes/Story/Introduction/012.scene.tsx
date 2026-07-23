import type { DialogType } from '@/Types/Dialog.type'

import { DigiviceItem } from '@/GameData/Items/Digivice.item'
import { Introduction013 } from '@/GameData/Scenes/Story/Introduction/013.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Introduction012 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getTexts('INTRODUCTION_011_ALT')}
          src={`/${DigiviceItem.portrait}.webp`}
        />
        <div className="text-bubble">
          <Text as="p">{getTexts('INTRODUCTION_012_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-012-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Introduction013 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
