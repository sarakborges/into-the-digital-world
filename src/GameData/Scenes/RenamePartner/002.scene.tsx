import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { AllDigimons } from '@/GameData/Digimons'

export const RenamePartner002 = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  const digimon = profile?.partnerDigimons[digivice?.currentDetails!]
  const baseDigimon = AllDigimons[digimon?.baseDigimon!]

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.bookmon,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getDialogs('RENAMEPARTNER_002_TEXT').replaceAll(
            '[DIGIMON]',
            digimon?.name || baseDigimon.name
          )}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-renamepartner-002-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
