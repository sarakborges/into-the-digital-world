import type { AcquaintanceGroupType } from '@/Types/DigiviceHelpers.type'

import { NpcDorimon } from '@/GameData/Npcs/Dorimon.npc'
import {
  getNpc,
  getNpcCategories,
  getNpcsByCategory
} from '@/GameData/Registries/Npc.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getAcquaintanceGroups = (): AcquaintanceGroupType[] => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return []
  }

  return getNpcCategories()
    .map((category) => {
      const npcs = Object.keys(getNpcsByCategory(category))
        .filter(
          (npcId) =>
            NpcDorimon.id !== npcId &&
            Object.keys(profile.npcAcquaintances ?? {}).includes(npcId)
        )
        .sort((a, b) => (a > b ? 1 : -1))
        .map((npcId) => {
          const npc = getNpc({ category: category, npcId: npcId })

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
