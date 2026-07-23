import type { DialogType } from '@/Types/Dialog.type'

import { NpcConsulmon } from '@/GameData/Npcs/Consulmon.npc'
import { findItem, getItem } from '@/GameData/Registries/Item.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Equipment001 = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!profile || !digivice) {
    return
  }

  const equipItem = (itemId: string) => {
    const digimonId = digivice.currentDetails
    const itemSlot = digivice.equipmentSlot

    if (digimonId === undefined || itemSlot === undefined) {
      return
    }

    const updatedProfile = {
      ...profile,

      partnerDigimons: {
        ...profile.partnerDigimons,

        [digimonId]: {
          ...profile.partnerDigimons[digimonId],

          equipments: {
            ...(profile.partnerDigimons[digimonId].equipments ?? {}),

            [itemSlot]: {
              equipmentId: itemId
            }
          }
        }
      }
    }

    saveSession(updatedProfile)
    closeScene()
  }

  const availableItems = Object.keys(profile.items).filter((itemId) => {
    const item = findItem(itemId)

    return (
      item?.category === 'equipment' &&
      (item.equipConditions === undefined || item.equipConditions())
    )
  })

  const dialogOptions: DialogType = {
    speaker: NpcConsulmon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">{getTexts('EQUIPMENT_001_TEXT')}</Text>
        </div>

        {!availableItems.length && (
          <Text>{getTexts('ENCYCLOPEDIA_EQUIPMENTS_NOAVAILABLE')}</Text>
        )}

        {!!availableItems.length &&
          availableItems.map((itemId) => (
            <div key={`player-equipments-${itemId}`}>
              <Button onClick={() => equipItem(itemId)}>
                {getItem(itemId).name}
              </Button>
            </div>
          ))}
      </div>
    ),

    options: [
      {
        id: 'scene-equipment-001-leave',
        text: getTexts('SCENES_LEAVE_BUTTON'),
        action: () => {
          closeScene()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
