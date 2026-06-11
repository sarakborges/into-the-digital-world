import type { ItemType } from '@/Types/Item.type'

import { AllDigimons } from '@/GameData/Digimons'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

export const EquipmentDrAllItem: ItemType = {
  id: 'equipmentDrAll',
  name: `Dragon's Roar +1 ALL`,
  portrait: 'families/dr',
  category: 'equipment',

  equipConditions: () => {
    const { profile } = useProfileStore.getState()
    const { digivice } = useDigiviceStore.getState()

    const baseDigimon =
      AllDigimons[
        profile!.partnerDigimons[digivice!.currentDetails!].baseDigimon
      ]

    return Object.keys(baseDigimon.families).includes('dr')
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
