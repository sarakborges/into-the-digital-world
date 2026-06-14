import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Dialog } from '@/Components/App/Dialog'
import { Location } from '@/Components/App/Location'

export const Location001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.gennai,

    content: (
      <div className="text-bubble">
        <Location />
      </div>
    ),

    options: [
      {
        id: 'scene-logoff-001-cancel',
        text: getDialogs('SCENES_CANCEL_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
