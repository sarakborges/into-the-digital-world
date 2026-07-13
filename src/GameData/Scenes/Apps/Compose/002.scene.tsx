import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'
import { closeScene } from '@/Helpers/Systems/Scenes'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { CompositionsList } from '@/Components/Digivice/Apps/AppCompose/List'

export const Compose002 = () => {
  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.jijimon,

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
