import type { DialogType } from '@/Types/Dialog.type'

import { NpcBookmon } from '@/GameData/Npcs/Bookmon.npc'
import { findDigimon } from '@/GameData/Registries/Digimon.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const RenamePartner002 = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!profile || !digivice?.currentDetails) {
    return
  }

  const digimon = profile.partnerDigimons[digivice.currentDetails]
  const baseDigimon = digimon ? findDigimon(digimon.baseDigimon) : undefined

  if (!digimon || !baseDigimon) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: NpcBookmon,

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
