import { warpTo } from '@/Helpers/warpTo.helper'

import { AllZones } from '@/GameData/Zones'

export const WarpToRestRoom1 = (props) => {
  const { profile, setProfile, scene, setGame } = props

  warpTo({
    profile,
    setProfile,
    setGame,
    zoneId: AllZones.rootDomainRestRoom1({ scene }).id,
    x: 6,
    y: 11
  })
}
