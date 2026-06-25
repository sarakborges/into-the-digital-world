import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/Systems/Zones'
import { getDialogs } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { WarpToCorridor } from './Events/WarpToCorridor.event'
import { TriggerAvatarFixing } from './Events/TriggerAvatarFixing.event'
import { TriggerAvatarCustomization } from './Events/TriggerAvatarCustomization.event'

import { grid } from './BedRoom.grid'

const gridSize = 13
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainBedRoom: ZoneType = {
  id: `rootDomainBedRoom`,
  background: `RootDomain/BedRoom`,
  name: `Bed Room`,
  gridSize,
  grid: filledGrid,

  tiles: [
    {
      id: 'warpToCorridor',
      x: 6,
      y: 12,
      onEnter: {
        function: WarpToCorridor
      }
    },

    {
      id: 'introductionGennai',
      x: 2,
      y: 5,

      condition: () => {
        const profile = useProfileStore.getState().profile
        const scene = useSceneStore.getState().scene

        if (!profile) {
          return false
        }

        const doneQuests = Object.keys(profile.quests).filter((quest) =>
          isQuestDone(quest)
        )

        return (
          !doneQuests.includes(AllQuests.avatarFixing.id) &&
          scene?.currentStage !== '001' &&
          scene?.currentStage !== '002'
        )
      },

      npc: {
        ...AllNpcs.general.gennai,
        isVisible: true
      }
    },

    {
      id: 'avatarFixing',
      x: 11,
      y: 2,
      defaultText: getDialogs('AVATARCUSTOMIZATION_001_TEXT'),
      npc: {
        ...AllNpcs.appmon.dressmon,
        isVisible: false
      },

      events: [
        {
          function: TriggerAvatarFixing,
          eventText: getDialogs('INTRODUCTION_024_TRIGGER'),
          eventType: 'important',

          condition: () => {
            const profile = useProfileStore.getState().profile

            if (!profile) {
              return false
            }

            const doneQuests = Object.keys(profile.quests).filter((quest) =>
              isQuestDone(quest)
            )

            return !doneQuests.includes(AllQuests.avatarFixing.id)
          }
        },

        {
          function: TriggerAvatarCustomization,
          eventText: getDialogs('AVATARCUSTOMIZATION_TRIGGER'),
          eventType: 'default',

          condition: () => {
            const profile = useProfileStore.getState().profile

            if (!profile) {
              return false
            }

            const doneQuests = Object.keys(profile.quests).filter((quest) =>
              isQuestDone(quest)
            )

            return !!doneQuests.includes(AllQuests.avatarFixing.id)
          }
        }
      ]
    }
  ]
}
