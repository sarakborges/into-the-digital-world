import { warpTo } from '@/Helpers/warpTo.helper'

import { RootDomainCorridor } from '@/GameData/Zones'

export const WarpToCorridor = (props) => {
  const { profile, setProfile } = props

  warpTo({
    profile,
    setProfile,
    zoneId: RootDomainCorridor().id,
    x: 1,
    y: 6
  })
}
