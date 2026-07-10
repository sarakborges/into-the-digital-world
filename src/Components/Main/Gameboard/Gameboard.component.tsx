import { getCurrentMap, getGameboardStyles } from '@/Helpers/Systems/Zones'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { GameboardCharacter } from '@/Components/Main/GameboardCharacter'
import { Gamepad } from '@/Components/Main/Gamepad'

// import { Minimap } from '@/Components/Main/Minimap'

import './Gameboard.style.scss'

export const Gameboard = () => {
  const { profile } = useProfileStore((state) => state)
  const { game } = useGameStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { dungeon } = useDungeonStore((state) => state)

  const currentMap = getCurrentMap()

  if (!profile?.currentZone || !currentMap || !!battle || !!dungeon) {
    return
  }

  const gameboardBodyVars = getGameboardStyles(
    profile.currentZone.x || 0,
    profile.currentZone.y || 0,
    currentMap.gridSize || 0,
    !!game?.isWarping
  )

  return (
    <div className="gameboard-container">
      {/* <Minimap /> */}
      <Gamepad />

      <main className="gameboard">
        <div className="gameboard-body" style={gameboardBodyVars}>
          <div
            className="gameboard-bg"
            style={{
              backgroundImage: `url('/zones/${currentMap.background}.webp')`
            }}
          />

          {!!(!battle || scene?.currentStage === 'start') && (
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
