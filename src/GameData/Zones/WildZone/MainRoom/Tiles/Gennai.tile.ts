import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { getDialogs } from '@/Helpers/Language'

import { AllNpcs } from '@/GameData/Npcs'
import { OpenLocation } from '@/GameData/Zones/WildZone/MainRoom/Events/OpenLocation.event'

export const WildZoneGennaiTile: ZoneTileType = {
  id: 'wildZoneGennai',
  x: 9,
  y: 7,
  defaultText: getDialogs('ROOTDOMAIN_GENNAI_DEFAULT'),

  npc: {
    ...AllNpcs.general.gennai,
    isVisible: true
  },

  events: [
    {
      function: OpenLocation,
      eventText: getDialogs('ROOTDOMAIN_LOCATION_TRIGGER'),
      eventType: 'default'
    }
  ]
}
