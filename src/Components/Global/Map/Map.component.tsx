import type { CSSProperties } from 'react'

import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

import './Map.style.scss'

export const Map = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile?.currentZone) {
    return
  }

  const currentZone: ZoneType =
    AllZones[profile.currentZone.id][profile.currentZone.map]

  const npcs = currentZone.tiles.filter(
    (tile) => tile.condition === undefined || !!tile.condition()
  )

  const events = currentZone.tiles.filter(
    (tile) =>
      (tile.condition === undefined || !!tile.condition()) && !!tile.onEnter
  )

  const tiles: Array<{ id: string; type: string; x: number; y: number }> = []

  for (let y = 0; y < Number(currentZone.gridSize); y++) {
    for (let x = 0; x < Number(currentZone.gridSize); x++) {
      let type = 'other'

      if (profile.currentZone.x === x && profile.currentZone.y === y) {
        type = 'player'
      }

      if (!currentZone?.grid[y]?.[x]) {
        type = 'blocked'
      }

      if (
        npcs.some((tile) => tile.x === x && tile.y === y) ||
        events.some((tile) => tile.x === x && tile.y === y)
      ) {
        type = 'event'
      }

      tiles.push({
        id: `${x}-${y}`,
        type,
        x,
        y
      })
    }
  }

  return (
    <div
      className="map"
      style={
        {
          '--tile-x': profile.currentZone.x,
          '--tile-y': profile.currentZone.y,
          '--grid-size': currentZone.gridSize
        } as CSSProperties
      }
    >
      <div className="map-tiles">
        {tiles.map((tile) => (
          <div
            style={{ '--tile-x': tile.x, '--tile-y': tile.y } as CSSProperties}
            className={tile.type}
            key={`minimap-${currentZone.name}-tile-${tile.id}`}
          />
        ))}
      </div>
    </div>
  )
}
