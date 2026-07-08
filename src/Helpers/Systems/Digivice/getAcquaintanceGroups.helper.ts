import { AllNpcs } from '@/GameData/Npcs'

import type { AcquaintanceGroupType } from '@/Types/DigiviceHelpers.type'
import type { ProfileType } from '@/Types/Profile.type'

export const getAcquaintanceGroups = (
  profile: ProfileType
): AcquaintanceGroupType[] =>
  Object.keys(AllNpcs)
    .map((category) => {
      const npcs = Object.keys(AllNpcs[category])
        .filter(
          (npcId) =>
            AllNpcs.digimon.dorimon.id !== npcId &&
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
