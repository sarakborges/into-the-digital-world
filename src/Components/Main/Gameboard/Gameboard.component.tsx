import { getCurrentMap, getGameboardStyles } from '@/Helpers/Systems/Zones'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

import '@/Components/Main/Gameboard/Gameboard.style.scss'
import { GameboardCharacter } from '@/Components/Main/GameboardCharacter'
import { Gamepad } from '@/Components/Main/Gamepad'

export const Gameboard = () => {
  const { profile } = useProfileStore((state) => state)
  const { game } = useGameStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { dungeon } = useDungeonStore((state) => state)

  const currentMap = getCurrentMap()

  if (!profile?.currentLocation || !currentMap || !!battle || !!dungeon) {
    return
  }

  const gameboardBodyVars = getGameboardStyles({
    currentX: profile.currentLocation.x || 0,
    currentY: profile.currentLocation.y || 0,
    gridSize: currentMap.gridSize || 0,
    isWarping: !!game?.isWarping
  })

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

          {!battle && (
            <>
              <GameboardCharacter isPlayer />

              {currentMap.tiles.map((tile) => {
                return (
                  <GameboardCharacter
                    tile={tile}
                    key={`zone-${currentMap.id}-x${tile.x}-y${tile.y}-${tile.id}`}
                  />
                )
              })}
            </>
          )}
        </div>
      </main>
    </div>
  )
}
