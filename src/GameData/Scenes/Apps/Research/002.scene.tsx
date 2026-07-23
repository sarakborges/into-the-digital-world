import type { DialogType } from '@/Types/Dialog.type'

import { NpcNanomon } from '@/GameData/Npcs/Nanomon.npc'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { ResearchList } from '@/Components/Digivice/Apps/ResearchesList/ResearchList.component'

export const Research002 = () => {
  const dialogOptions: DialogType = {
    speaker: NpcNanomon,

    content: <ResearchList />,

    options: [
      {
        id: 'scene-research-002-leave',
        text: getTexts('SCENES_LEAVE_BUTTON'),
        action: () => {
          closeScene()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
