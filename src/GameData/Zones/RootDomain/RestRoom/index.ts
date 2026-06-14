import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'
import { getDialogs } from '@/Helpers/getDialogs.helper'
import { isQuestDone } from '@/Helpers/isQuestDone.helper'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

import { WarpToCorridor } from './Events/WarpToCorridor.event'
import { TriggerAvatarFixing } from './Events/TriggerAvatarFixing.event'
import { TriggerAvatarCustomization } from './Events/TriggerAvatarCustomization.event'

import { grid } from './RestRoom.grid'

const gridSize = 13
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainRestRoom: ZoneType = {
  id: `rootDomainRestRoom`,
  background: `RootDomain/RestRoom`,
  name: `Rest Room`,
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
      x: 6,
      y: 7,

      condition: () => {
        const profile = useProfileStore.getState().profile

        const doneQuests = Object.keys(profile!.quests).filter((quest) =>
          isQuestDone(quest)
        )

        return !doneQuests.includes(AllQuests.introduction.id)
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
      defaultText: getDialogs('INTRODUCTION_024_TEXT'),
      npc: {
        ...AllNpcs.appmon.dressmon,
        isVisible: false
      },

      events: [
        {
          function: TriggerAvatarFixing,
          eventText: getDialogs('INTRODUCTION_024_TRIGGER'),
          eventType: 'important'
        }
      ],

      condition: () => {
        const profile = useProfileStore.getState().profile

        const doneQuests = Object.keys(profile!.quests).filter((quest) =>
          isQuestDone(quest)
        )

        return !doneQuests.includes(AllQuests.avatarFixing.id)
      }
    },

    {
      id: 'customizeAvatar',
      x: 11,
      y: 2,
      defaultText: getDialogs('AVATARCUSTOMIZATION_001_TEXT'),
      npc: {
        ...AllNpcs.appmon.dressmon,
        isVisible: false
      },

      events: [
        {
          function: TriggerAvatarCustomization,
          eventText: getDialogs('AVATARCUSTOMIZATION_TRIGGER'),
          eventType: 'default'
        }
      ],

      condition: () => {
        const profile = useProfileStore.getState().profile

        const doneQuests = Object.keys(profile!.quests).filter((quest) =>
          isQuestDone(quest)
        )

        return !!doneQuests.includes(AllQuests.avatarFixing.id)
      }
    }
  ]
}
