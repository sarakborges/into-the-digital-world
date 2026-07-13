import type { DialogType } from '@/Types/Dialog.type'

import { AllDigimons } from '@/GameData/Digimons'
import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'
import { closeScene } from '@/Helpers/Systems/Scenes'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const RenamePartner002 = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!profile || !digivice) {
    return
  }

  const digimon = profile.partnerDigimons[digivice.currentDetails!]
  const baseDigimon = AllDigimons[digimon.baseDigimon!]

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.bookmon,

    content: (
      <div className="text-bubble">
        <Text as="p">
          {getTexts('RENAMEPARTNER_002_TEXT', {
            '[DIGIMON]': digimon.name || baseDigimon.name
          })}
        </Text>
      </div>
    ),

    options: [
      {
        id: 'scene-renamepartner-002-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          closeScene()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
