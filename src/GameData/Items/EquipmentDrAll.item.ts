import type { ItemType } from '@/Types/Item.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const EquipmentDrAllItem: ItemType = {
  id: 'equipmentDrAll',
  name: `Dragon's Roar +1 ALL`,
  picture: 'fields/dr',
  category: 'equipment',

  equipConditions: () => {
    const { profile } = useProfileStore.getState()
    const { digivice } = useDigiviceStore.getState()

    if (!profile || !digivice || !digivice.currentDetails) {
      return false
    }

    const partnerDigimon = profile.partnerDigimons?.[digivice.currentDetails]

    if (!partnerDigimon) {
      return false
    }

    const baseDigimon = AllDigimons[partnerDigimon.baseDigimon]
    return Object.keys(baseDigimon.fields).includes('dr')
  },

  equipmentBonuses: {
    stats: {
      vit: {
        amount: 1,
        type: 'fixed'
      },

      pow: {
        amount: 1,
        type: 'fixed'
      },

      res: {
        amount: 1,
        type: 'fixed'
      },

      tec: {
        amount: 1,
        type: 'fixed'
      },

      agi: {
        amount: 1,
        type: 'fixed'
      }
    }
  }
}
