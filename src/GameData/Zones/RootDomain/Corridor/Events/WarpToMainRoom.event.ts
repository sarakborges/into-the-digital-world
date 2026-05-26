import { warpTo } from '@/Helpers/warpTo.helper'

export const WarpToMainRoom = (props) => {
  const { setGame } = props

  warpTo({
    setGame,
    zoneId: 'rootDomain',
    mapId: 'mainRoom',
    x: 9,
    y: 17
  })
}
