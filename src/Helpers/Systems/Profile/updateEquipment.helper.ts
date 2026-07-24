import { findItem } from '@/GameData/Registries/Item.registry'

import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

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
  const profile = useProfileStore.getState().profile
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

  setProfileSession({
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
  })

  return true
}
