import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/Language/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/App/Dialog'
import { CompositionsList } from '@/Components/App/CompositionsList'

export const Compose002 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.jijimon,

    content: <CompositionsList />,

    options: [
      {
        id: 'scene-compose-002-leave',
        text: getDialogs('SCENES_LEAVE_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
