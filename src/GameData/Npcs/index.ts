import type { NpcType } from '@/Types/Npc.type'

import { NpcGennai } from './Gennai.npc'

import { NpcDorimon } from './Dorimon.npc'
import { NpcNanomon } from './Nanomon.npc'

import { NpcDressmon } from './Dressmon.npc'
import { NpcSavemon } from './Savemon.npc'
import { NpcLogamon } from './Logamon.npc'
import { NpcMirrormon } from './Mirrormon.npc'
import { NpcAddmon } from './Addmon.npc'
import { NpcBookmon } from './Bookmon.npc'
import { NpcOujamon } from './Oujamon.npc'
import { NpcConsulmon } from './Consulmon.npc'

export const AllNpcs: {
  [category: string]: {
    [npcId: string]: NpcType
  }
} = {
  general: {
    gennai: NpcGennai
  },

  digimon: {
    dorimon: NpcDorimon,
    nanomon: NpcNanomon
  },

  appmon: {
    dressmon: NpcDressmon,
    savemon: NpcSavemon,
    logamon: NpcLogamon,
    mirrormon: NpcMirrormon,
    addmon: NpcAddmon,
    bookmon: NpcBookmon,
    oujamon: NpcOujamon,
    consulmon: NpcConsulmon
  }
}
