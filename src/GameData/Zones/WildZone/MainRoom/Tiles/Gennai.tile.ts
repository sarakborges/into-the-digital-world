import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { getTranslation } from '@/Helpers/Language'

import { OpenLocation } from '@/GameData/Zones/WildZone/MainRoom/Events/OpenLocation.event'
import { AllNpcs } from '@/GameData/Npcs'

export const WildZoneGennaiTile: ZoneTileType = {
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
