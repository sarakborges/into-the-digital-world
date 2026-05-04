import { warpTo } from '@/Helpers/warpTo.helper'

import { RootDomainRestRoom1 } from '@/GameData/Zones'

export const WarpToRestRoom1 = (props) => {
  const { profile, setProfile, scene } = props

  warpTo({
    profile,
    setProfile,
    zoneId: RootDomainRestRoom1({ scene }).id,
    x: 6,
    y: 10
  })
}
