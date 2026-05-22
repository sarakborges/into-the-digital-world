import { warpTo } from '@/Helpers/warpTo.helper'

import { RootDomainMainRoom } from '@/GameData/Zones'

export const WarpToMainRoom = (props) => {
  const { profile, setProfile, setGame } = props

  warpTo({
    profile,
    setProfile,
    setGame,
    zoneId: RootDomainMainRoom({ profile }).id,
    x: 9,
    y: 17
  })
}
