import type { DialogType } from '@/Types/Dialog.type'

import { getTranslation } from '@/Helpers/Language'

import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { CompositionsList } from '@/Components/Digivice/Apps/AppCompose/List'
import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Compose002 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.jijimon,

    content: <CompositionsList />,

    options: [
      {
        id: 'scene-compose-002-leave',
        text: getTranslation('SCENES_LEAVE_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
