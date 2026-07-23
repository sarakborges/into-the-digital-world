import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'
import { saveDungeon } from '@/Helpers/Systems/Dungeon/saveDungeon.helper'
import { warpTo } from '@/Helpers/Systems/Zones/warpTo.helper'

export const triggerDefeat = () => {
  warpTo({
    x: 3,
    y: 5,
    zone: 'rootDomain',
    map: 'restRoom'
  })

  saveDungeon(null)
  saveBattle(null)
}
