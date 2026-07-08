import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getTranslation } from '@/Helpers/Language'

import { AppLocation } from '@/Components/Digivice/Apps/AppLocation'
import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Location001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.gennai,

    content: (
      <div className="text-bubble">
        <AppLocation />
      </div>
    ),

    options: [
      {
        id: 'scene-logoff-001-cancel',
        text: getTranslation('SCENES_CANCEL_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
