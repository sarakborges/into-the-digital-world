import { warpTo } from '@/Helpers/warpTo.helper'

export const WarpToMainRoom = (props) => {
  const { profile, setProfile, setGame } = props

  warpTo({
    profile,
    setProfile,
    setGame,
    zoneId: 'rootDomain',
    mapId: 'mainRoom',
    x: 9,
    y: 17
  })
}
