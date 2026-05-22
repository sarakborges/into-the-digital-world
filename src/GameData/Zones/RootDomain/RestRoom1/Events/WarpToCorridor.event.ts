import { warpTo } from '@/Helpers/warpTo.helper'

import { AllZones } from '@/GameData/Zones'

export const WarpToCorridor = (props) => {
  const { profile, setProfile, setGame } = props

  warpTo({
    profile,
    setProfile,
    setGame,
    zoneId: AllZones.rootDomainCorridor().id,
    x: 4,
    y: 5
  })
}
