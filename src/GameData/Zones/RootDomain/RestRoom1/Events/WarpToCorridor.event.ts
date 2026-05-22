import { warpTo } from '@/Helpers/warpTo.helper'

import { RootDomainCorridor } from '@/GameData/Zones'

export const WarpToCorridor = (props) => {
  const { profile, setProfile, setGame } = props

  warpTo({
    profile,
    setProfile,
    setGame,
    zoneId: RootDomainCorridor().id,
    x: 4,
    y: 5
  })
}
