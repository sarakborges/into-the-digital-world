import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'
import { saveDungeon } from '@/Helpers/Systems/Dungeon'
import { warpTo } from '@/Helpers/Systems/Zones'

export const triggerDefeat = () => {
  warpTo({
    x: 3,
    y: 5,
    zoneId: 'rootDomain',
    mapId: 'restRoom'
  })

  saveDungeon(null)
  saveBattle(null)
}
