import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { AppLocation } from '@/Components/Digivice/Apps/AppLocation'

export const Location001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: (
      <div className="text-bubble">
        <AppLocation />
      </div>
    ),

    options: [
      {
        id: 'scene-logoff-001-cancel',
        text: getTexts('SCENES_CANCEL_BUTTON'),
        action: () => {
          setScene(null)
          openCurrentTileScene()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
