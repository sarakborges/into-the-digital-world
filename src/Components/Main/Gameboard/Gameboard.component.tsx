import type { CssPropertiesWithVariables } from '@/Types/CssProperties.type'

import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

import '@/Components/Main/Gameboard/Gameboard.style.scss'
import { GameboardCharacter } from '@/Components/Main/GameboardCharacter/GameboardCharacter.component'
import { Gamepad } from '@/Components/Main/Gamepad/Gamepad.component'

export const Gameboard = () => {
  const { profile } = useProfileStore((state) => state)
  const { game } = useGameStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { dungeon } = useDungeonStore((state) => state)

  const currentMap = getCurrentMap()

  if (!profile?.currentLocation || !currentMap || !!battle || !!dungeon) {
    return
  }

  const gameboardBodyVars: CssPropertiesWithVariables = {
    '--current-x': profile.currentLocation.x,
    '--current-y': profile.currentLocation.y,
    '--grid-size': currentMap.gridSize,
    '--is-warping': game?.isWarping ? 0 : 1
  }

  return (
    <div className="gameboard-container">
      <Gamepad />

      <main className="gameboard">
        <div className="gameboard-body" style={gameboardBodyVars}>
          <div
            className="gameboard-bg"
            style={{
              backgroundImage: `url('/zones/${currentMap.background}.webp')`
            }}
          />

          <GameboardCharacter isPlayer />

          {currentMap.tiles.map((tile) => (
            <GameboardCharacter
              tile={tile}
              key={`zone-${currentMap.id}-x${tile.x}-y${tile.y}-${tile.id}`}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
