import { warpTo } from '@/Helpers/warpTo.helper'

export const WarpToRestRoom1 = (props) => {
  const { profile, setProfile, scene, setGame } = props

  warpTo({
    profile,
    setProfile,
    setGame,
    zoneId: 'rootDomain',
    mapId: 'corridor',
    x: 6,
    y: 11
  })
}
