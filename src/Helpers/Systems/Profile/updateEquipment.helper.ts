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

  const partner = profile?.partnerDigimons[digimonId]

  if (!profile || !partner) {
    return
  }

  const updatedProfile = {
    ...profile,

    partnerDigimons: {
      ...profile.partnerDigimons,

      [digimonId]: {
        ...partner,

        equipments: {
          ...partner.equipments,
          [equipmentSlot]: equipmentId ? { equipmentId } : undefined
        }
      }
    }
  }

  saveSession(updatedProfile)
}
