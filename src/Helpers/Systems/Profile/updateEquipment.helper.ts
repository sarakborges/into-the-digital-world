import { findItem } from '@/GameData/Registries/Item.registry'

import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const updateEquipment = ({
  digimonId,
  equipmentSlot,
  equipmentId
}: {
  digimonId: number
  equipmentSlot: number
  equipmentId: string | undefined
}): boolean => {
  const { profile } = useProfileStore.getState()
  const partner = profile?.partnerDigimons[digimonId]

  if (!profile || !partner) {
    return false
  }

  if (equipmentId !== undefined) {
    const equipment = findItem(equipmentId)

    if (!equipment || equipment.category !== 'equipment') {
      return false
    }
  }

  const updatedProfile = {
    ...profile,

    partnerDigimons: {
      ...profile.partnerDigimons,

      [digimonId]: {
        ...partner,

        equipments: {
          ...partner.equipments,
          [equipmentSlot]:
            equipmentId === undefined ? undefined : { equipmentId }
        }
      }
    }
  }

  saveSession(updatedProfile)

  return true
}
