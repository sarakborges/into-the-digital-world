import type { NpcType } from '@/Types/Npc.type'

import { NpcAddmon } from '@/GameData/Npcs/Addmon.npc'
import { NpcBookmon } from '@/GameData/Npcs/Bookmon.npc'
import { NpcConsulmon } from '@/GameData/Npcs/Consulmon.npc'
import { NpcDorimon } from '@/GameData/Npcs/Dorimon.npc'
import { NpcDressmon } from '@/GameData/Npcs/Dressmon.npc'
import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { NpcJijimon } from '@/GameData/Npcs/Jijimon.npc'
import { NpcLogamon } from '@/GameData/Npcs/Logamon.npc'
import { NpcMirrormon } from '@/GameData/Npcs/Mirrormon.npc'
import { NpcNanomon } from '@/GameData/Npcs/Nanomon.npc'
import { NpcNavimon } from '@/GameData/Npcs/Navimon.npc'
import { NpcOujamon } from '@/GameData/Npcs/Oujamon.npc'
import { NpcSavemon } from '@/GameData/Npcs/Savemon.npc'

export const NpcRegistry = {
  general: {
    gennai: NpcGennai
  },

  digimon: {
    dorimon: NpcDorimon,
    nanomon: NpcNanomon,
    jijimon: NpcJijimon
  },

  appmon: {
    dressmon: NpcDressmon,
    savemon: NpcSavemon,
    logamon: NpcLogamon,
    mirrormon: NpcMirrormon,
    addmon: NpcAddmon,
    bookmon: NpcBookmon,
    oujamon: NpcOujamon,
    consulmon: NpcConsulmon,
    navimon: NpcNavimon
  }
} satisfies Record<string, Record<string, NpcType>>
