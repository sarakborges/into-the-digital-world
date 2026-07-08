import { useProfileStore } from '@/Stores/Profile.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useGameStore } from '@/Stores/Game.store'

import { getCurrentZone } from '@/Helpers/Systems/Zones'

import { GameboardCharacter } from '@/Components/Main/GameboardCharacter'
import { Minimap } from '@/Components/Main/Minimap'
import { Gamepad } from '@/Components/Main/Gamepad'

import './Gameboard.style.scss'

export const Gameboard = () => {
  const { profile } = useProfileStore((state) => state)
  const { game } = useGameStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { dungeon } = useDungeonStore((state) => state)

  if (!profile?.currentZone || !!battle || !!dungeon) {
    return
  }

  const currentZone = getCurrentZone()!

  const gameboardBodyVars = {
    '--current-x': profile.currentZone.x,
    '--current-y': profile.currentZone.y,
    '--grid-size': currentZone.gridSize,
    '--is-warping': !game?.isWarping ? 1 : 0
  } as React.CSSProperties

  return (
    <div className="gameboard-container">
      <Minimap />
      <Gamepad />

      <main className="gameboard">
        <div className="gameboard-body" style={gameboardBodyVars}>
          <div
            className="gameboard-bg"
            style={{
              backgroundImage: `url('/zones/${currentZone.background}.webp')`
            }}
          />

          {!!(!battle || scene?.currentStage === 'start') && (
            <>
              <GameboardCharacter isPlayer />

              {currentZone.tiles.map((tile) => {
                return (
                  <GameboardCharacter
                    tile={tile}
                    key={`zone-${currentZone.id}-x${tile.x}-y${tile.y}-${tile.id}`}
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
