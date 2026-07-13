import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'
import { closeScene } from '@/Helpers/Systems/Scenes'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { ResearchList } from '@/Components/Digivice/Apps/ResearchesList'

export const Research002 = () => {
  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.nanomon,

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
