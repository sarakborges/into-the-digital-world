import type { DialogType } from '@/Types/Dialog.type'

import { AllItems } from '@/GameData/Items'
import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'
import { saveSession } from '@/Helpers/Systems/Data'
import { closeScene } from '@/Helpers/Systems/Scenes'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Equipment001 = () => {
  const { profile } = useProfileStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!profile || !digivice) {
    return
  }

  const equipItem = (itemId: string) => {
    const digimonId = digivice.currentDetails
    const itemSlot = digivice.equipmentSlot

    if (!digimonId || !itemSlot) {
      return
    }

    const updatedProfile = {
      ...profile,

      partnerDigimons: {
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

  const availableItems = Object.keys(profile.items).filter(
    (item) =>
      AllItems[item].category === 'equipment' &&
      (AllItems[item].equipConditions === undefined ||
        !!AllItems[item].equipConditions?.()) &&
      AllItems[item]
  )

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.consulmon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">{getTexts('EQUIPMENT_001_TEXT')}</Text>
        </div>

        {!availableItems.length && (
          <Text>{getTexts('ENCYCLOPEDIA_EQUIPMENTS_NOAVAILABLE')}</Text>
        )}

        {!!availableItems.length &&
          availableItems.map((item) => (
            <div key={`player-equipments-${item}`}>
              <Button onClick={() => equipItem(item)}>
                {AllItems[item].name}
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
