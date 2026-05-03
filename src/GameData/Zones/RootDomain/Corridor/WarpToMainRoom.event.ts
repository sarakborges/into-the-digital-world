import { warpTo } from '@/Helpers/warpTo.helper'

import { RootDomainMainRoom } from '@/GameData/Zones'

export const WarpToMainRoom = (props) => {
  const { profile, setProfile } = props

  warpTo({
    profile,
    setProfile,
    zoneId: RootDomainMainRoom.id,
    x: 9,
    y: 17
  })
}
