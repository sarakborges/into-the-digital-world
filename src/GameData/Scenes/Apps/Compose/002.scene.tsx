import type { DialogType } from '@/Types/Dialog.type'

import { NpcJijimon } from '@/GameData/Npcs/Jijimon.npc'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { CompositionsList } from '@/Components/Digivice/Apps/AppCompose/List/CompositionsList.component'

export const Compose002 = () => {
  const dialogOptions: DialogType = {
    speaker: NpcJijimon,

    content: <CompositionsList />,

    options: [
      {
        id: 'scene-compose-002-leave',
        text: getTexts('SCENES_LEAVE_BUTTON'),
        action: () => {
          closeScene()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
