import type { DungeonRoomType } from '@/Types/DungeonRoom.type'

import KoromonBoss1xEncounter from '@/GameData/Dungeons/WildZone/KoromonNest/Encounters/KoromonBoss1x.encounter'

import { leaveDungeon } from '@/Helpers/Systems/Dungeon/leaveDungeon.helper'

export const DungeonWildZoneKoromonNestRoomBoss: DungeonRoomType = {
  name: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_BOSS_NAME',
  description: 'DUNGEON_WILDZONE_KOROMON_NEST_ROOM_BOSS_DESCRIPTION',
  type: 'battle',

  encounters: [KoromonBoss1xEncounter],

  choices: {
    leave: {
      name: 'SCENES_LEAVE_BUTTON',
      description: 'DUNGEON_GIVEUP_DESCRIPTION',
      event: leaveDungeon
    }
  }
}
