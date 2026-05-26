import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { AllDigimons } from '@/GameData/Digimons'

export const RenamePartner002 = () => {
  const profile = useProfileStore((state) => state.profile)
  const setScene = useSceneStore((state) => state.setScene)

  const digivice = useDigiviceStore((state) => state.digivice)

  const digimon = profile?.partnerDigimons[digivice?.currentDetails!]
  const baseDigimon = AllDigimons[digimon?.baseDigimon!]

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.bookmon,

    content: (
      <>
        <Text as="p">
          {getDialogs('RENAMEPARTNER_002_TEXT').replaceAll(
            '[DIGIMON]',
            digimon?.name || baseDigimon.name
          )}
        </Text>
      </>
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
