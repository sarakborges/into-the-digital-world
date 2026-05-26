import { warpTo } from '@/Helpers/warpTo.helper'

export const WarpToCorridor = (props) => {
  const { profile, setProfile, setGame } = props

  warpTo({
    profile,
    setProfile,
    setGame,
    zoneId: 'rootDomain',
    mapId: 'corridor',
    x: 1,
    y: 6
  })
}
