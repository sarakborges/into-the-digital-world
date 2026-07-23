import { AllScenes } from '@/GameData/Scenes'

import { getCurrentMap, getInteractableTiles } from '@/Helpers/Systems/Zones'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const openCurrentTileScene = () => {
  const { profile } = useProfileStore.getState()
  const { dungeon } = useDungeonStore.getState()
  const { battle } = useBattleStore.getState()
  const { digivice } = useDigiviceStore.getState()
  const { setScene } = useSceneStore.getState()

  const currentMap = getCurrentMap()

  if (!profile || !currentMap || !!digivice?.isOpen) {
    setScene(null)
    return
  }

  if (!!battle) {
    setScene(AllScenes.battle.turn)
    return
  }

  if (!!dungeon) {
    setScene(AllScenes.dungeon.chooseRoom)
    return
  }

  const { x, y } = profile.currentZone

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
