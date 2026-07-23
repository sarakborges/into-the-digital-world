import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'
import { getInteractableTiles } from '@/Helpers/Systems/Zones/getInteractableTiles.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const openCurrentTileScene = () => {
  const { profile } = useProfileStore.getState()
  const { digivice } = useDigiviceStore.getState()
  const { setScene } = useSceneStore.getState()

  const currentMap = getCurrentMap()

  if (!profile || !currentMap || !!digivice?.isOpen) {
    setScene(null)
    return
  }

  const { x, y } = profile.currentLocation

  const currentTile = currentMap.tiles.find(
    (tile) =>
      tile.x === x &&
      tile.y === y &&
      (tile.condition === undefined || !!tile.condition())
  )

  if (
    !!currentTile?.onEnter &&
    (currentTile.condition === undefined || !!currentTile?.condition())
  ) {
    currentTile.onEnter.function()

    return
  }

  const surroundingTiles = getInteractableTiles()

  if (!surroundingTiles[0]?.scene) {
    setScene(null)
    return
  }

  setScene(surroundingTiles[0].scene)
}
