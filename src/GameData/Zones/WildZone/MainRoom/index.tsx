import type { ZoneType } from '@/Types/Zone.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { fillGrid } from '@/Helpers/Systems/Zones'
import { isQuestDone } from '@/Helpers/Systems/Quests'
import { getDialogs } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'

import { OpenLocation } from './Events/OpenLocation.event'

import { grid } from './MainRoom.grid'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const WildZoneMainRoom: ZoneType = {
  id: `wildZoneMainRoom`,
  background: `WildZone/MainRoom`,
  name: `Wild Zone`,
  gridSize,
  grid: filledGrid,

  tiles: [
    {
      id: 'gennaiFastTravel',
      x: 9,
      y: 7,
      defaultText: getDialogs('LOCATION_001_TEXT'),

      npc: {
        ...AllNpcs.general.gennai,
        isVisible: true
      },

      events: [
        {
          function: OpenLocation,
          eventText: getDialogs('LOCATION_TRIGGER'),
          eventType: 'default'
        }
      ],

      condition: () => {
        const profile = useProfileStore.getState().profile

        if (!profile) {
          return false
        }

        const doneQuests = Object.keys(profile.quests).filter((quest) =>
          isQuestDone(quest)
        )

        return (
          !!doneQuests.includes(AllQuests.introduction.id) &&
          !!doneQuests.includes(AllQuests.starterDigimon.id)
        )
      }
    }
  ]
}
