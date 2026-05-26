import { warpTo } from '@/Helpers/warpTo.helper'

export const WarpToRestRoom1 = (props) => {
  const { setGame } = props

  warpTo({
    setGame,
    zoneId: 'rootDomain',
    mapId: 'corridor',
    x: 6,
    y: 11
  })
}
