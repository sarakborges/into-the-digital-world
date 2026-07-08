import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { getTranslation } from '@/Helpers/Language'

import { OpenDungeonKoromon } from '@/GameData/Zones/WildZone/MainRoom/Events/OpenDungeonKoromon.event'

export const WildZoneKoromonNestTile: ZoneTileType = {
  id: 'wildZoneKoromonNest',
  x: 12,
  y: 11,
  defaultText: getTranslation('DUNGEON_WILDZONE_KOROMON_NEST_DEFAULT'),

  events: [
    {
      function: OpenDungeonKoromon,
      eventText: getTranslation('DUNGEON_WILDZONE_KOROMON_NEST_TRIGGER'),
      eventType: 'dungeon'
    }
  ]
}
