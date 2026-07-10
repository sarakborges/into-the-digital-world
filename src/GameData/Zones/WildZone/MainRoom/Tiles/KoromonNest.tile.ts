import type { MapTileType } from '@/Types/MapTile.type'

import { OpenDungeonKoromon } from '@/GameData/Zones/WildZone/MainRoom/Events/OpenDungeonKoromon.event'

import { getTexts } from '@/Helpers/Language'

export const WildZoneKoromonNestTile: MapTileType = {
  id: 'wildZoneKoromonNest',
  x: 12,
  y: 11,
  defaultText: getTexts('DUNGEON_WILDZONE_KOROMON_NEST_DEFAULT'),

  events: [
    {
      function: OpenDungeonKoromon,
      eventText: getTexts('DUNGEON_WILDZONE_KOROMON_NEST_TRIGGER'),
      eventType: 'dungeon'
    }
  ]
}
