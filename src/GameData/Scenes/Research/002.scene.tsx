import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/Language'

import { Dialog } from '@/Components/Dialog'
import { ResearchList } from '@/Components/ResearchList'

export const Research002 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.digimon.nanomon,

    content: <ResearchList />,

    options: [
      {
        id: 'scene-research-002-leave',
        text: getDialogs('SCENES_LEAVE_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
