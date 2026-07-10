import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { OpenLocation } from '@/GameData/Zones/WildZone/MainRoom/Events/OpenLocation.event'

import { getTranslation } from '@/Helpers/Language'

export const WildZoneGennaiTile: MapTileType = {
  id: 'wildZoneGennai',
  x: 9,
  y: 7,
  defaultText: getTranslation('ROOTDOMAIN_GENNAI_DEFAULT'),

  npc: {
    ...AllNpcs.general.gennai,
    isVisible: true
  },

  events: [
    {
      function: OpenLocation,
      eventText: getTranslation('ROOTDOMAIN_LOCATION_TRIGGER'),
      eventType: 'default'
    }
  ]
}
