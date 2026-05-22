import { warpTo } from '@/Helpers/warpTo.helper'

import { AllZones } from '@/GameData/Zones'

export const WarpToMainRoom = (props) => {
  const { profile, setProfile, setGame } = props

  warpTo({
    profile,
    setProfile,
    setGame,
    zoneId: AllZones.rootDomainMainRoom({ profile }).id,
    x: 9,
    y: 17
  })
}
