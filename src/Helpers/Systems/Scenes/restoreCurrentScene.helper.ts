import { BattleTurn } from '@/GameData/Scenes/Apps/Battle/BattleTurn.scene'
import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const restoreCurrentScene = () => {
  const { battle } = useBattleStore.getState()
  const { dungeon } = useDungeonStore.getState()
  const { setScene } = useSceneStore.getState()

  if (battle) {
    setScene({ component: BattleTurn })
    return
  }

  if (dungeon) {
    setScene({ component: DungeonChooseRoom })
    return
  }

  openCurrentTileScene()
}
