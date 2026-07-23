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
}) => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  const updatedProfile = {
    ...profile,

    partnerDigimons: {
      ...profile.partnerDigimons,

      [digimonId]: {
        ...profile.partnerDigimons[digimonId],

        equipments: {
          ...profile.partnerDigimons[digimonId].equipments,
          [equipmentSlot]: equipmentId
        }
      }
    }
  }

  saveSession(updatedProfile)
}
