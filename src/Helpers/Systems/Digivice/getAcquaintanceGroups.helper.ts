import type { AcquaintanceGroupType } from '@/Types/DigiviceHelpers.type'

import { AllNpcs } from '@/GameData/Npcs'
import { NpcDorimon } from '@/GameData/Npcs/Dorimon.npc'

import { useProfileStore } from '@/Stores/Profile.store'

export const getAcquaintanceGroups = (): AcquaintanceGroupType[] => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return []
  }

  return Object.keys(AllNpcs)
    .map((category) => {
      const npcs = Object.keys(AllNpcs[category])
        .filter(
          (npcId) =>
            NpcDorimon.id !== npcId &&
            Object.keys(profile.npcAcquaintances ?? {}).includes(npcId)
        )
        .sort((a, b) => (a > b ? 1 : -1))
        .map((npcId) => {
          const npc = AllNpcs[category][npcId]

          return {
            id: npc.id,
            name: npc.name,
            portrait: npc.portrait,
            npcId
          }
        })

      return {
        category,
        npcs
      }
    })
    .filter(({ npcs }) => npcs.length)
}
