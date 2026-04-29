import * as Zones from '@/GameData/Zones'

import { useGame } from '@/Hooks/Game.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Portrait } from '@/Components/System/Portrait'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './Tile.style.scss'

export const Tile = ({ x, y }: { x: number; y: number }) => {
  const { game } = useGame()
  const { profile } = useProfile()

  if (!game || !profile) {
    return null
  }

  const currentZone = Zones[game.currentZone]

  return (
    <div className="tile" data-tiletype={currentZone.grid[y][x].texture || ''}>
      {!!currentZone.grid[y][x].npc && (
        <div className="npc">
          <Portrait
            src={`/${currentZone.grid[y][x].npc.portrait}.webp`}
            alt={currentZone.grid[y][x].npc.name}
          />
        </div>
      )}

      {game.currentX === x && game.currentY === y && (
        <div className="player-character">
          <PlayerAvatar />
        </div>
      )}
    </div>
  )
}
