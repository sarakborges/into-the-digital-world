import { warpTo } from '@/Helpers/warpTo.helper'

export const WarpToCorridor = (props) => {
  const { setGame } = props

  warpTo({
    setGame,
    zoneId: 'rootDomain',
    mapId: 'corridor',
    x: 4,
    y: 5
  })
}
