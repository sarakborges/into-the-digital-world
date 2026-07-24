import { useState } from 'react'

import type { DialogType } from '@/Types/Dialog.type'

import { NpcBookmon } from '@/GameData/Npcs/Bookmon.npc'
import { findDigimon } from '@/GameData/Registries/Digimon.registry'
import { RenamePartner002 } from '@/GameData/Scenes/Apps/RenamePartner/002.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Input } from '@/Components/DesignSystem/Input/Input.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const RenamePartner001 = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { setScene } = useSceneStore((state) => state)
  const [name, setName] = useState(
    digivice?.currentDetails
      ? (profile?.partnerDigimons[digivice.currentDetails]?.name ?? '')
      : ''
  )

  if (!profile || !digivice?.currentDetails) {
    return
  }

  const digimonId = digivice.currentDetails
  const digimon = profile.partnerDigimons[digimonId]
  const baseDigimon = digimon ? findDigimon(digimon.baseDigimon) : undefined

  if (!digimon || !baseDigimon) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: NpcBookmon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTexts('RENAMEPARTNER_001_TEXT', {
              '[DIGIMON]': digimon.name || baseDigimon.name
            })}
          </Text>
        </div>

        <Input
          label={getTexts('RENAMEPARTNER_001_INPUT')}
          placeholder={digimon?.name || baseDigimon.name}
          name="partner-name"
          value={name}
          autoFocus
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    ),

    options: [
      {
        id: 'scene-renamepartner-001-cancel',
        text: getTexts('SCENES_CANCEL_BUTTON'),
        action: () => {
          closeScene()
        }
      },

      {
        id: 'scene-renamepartner-001-confirm',
        text: getTexts('SCENES_CONFIRM_BUTTON'),
        action: () => {
          setProfileSession({
            ...profile,

            partnerDigimons: {
              ...profile.partnerDigimons,

              [digimonId]: {
                ...digimon,
                name: name.trim()
              }
            }
          })

          setScene({ component: RenamePartner002 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
