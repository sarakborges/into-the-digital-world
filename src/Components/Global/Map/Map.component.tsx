import type {CSSProperties} from 'react'

import type {ZoneType} from '@/Types/Zone.type'

import {AllZones} from '@/GameData/Zones'

import {useProfileStore} from '@/Stores/Profile.store'

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

  const nonExistantTiles: Array<{ id: string; x: number; y: number }> = []

  for (let y = 0; y < Number(currentZone.gridSize); y++) {
    for (let x = 0; x < Number(currentZone.gridSize); x++) {
      if (!currentZone?.grid[y]?.[x]) {
        if (
          npcs.some((tile) => tile.x === x && tile.y === y) ||
          events.some((tile) => tile.x === x && tile.y === y)
        ) {
          continue
        }

        nonExistantTiles.push({
          id: `${x}-${y}`,
          x,
          y
        })
      }
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
        <div className="player" />

        {npcs.map((tile) => (
          <div
            style={{ '--tile-x': tile.x, '--tile-y': tile.y } as CSSProperties}
            className="npcs"
            key={`minimap-${currentZone.name}-tile-${tile.id}`}
          />
        ))}

        {events.map((tile) => (
          <div
            style={{ '--tile-x': tile.x, '--tile-y': tile.y } as CSSProperties}
            className="events"
            key={`minimap-${currentZone.name}-tile-${tile.id}`}
          />
        ))}

        {nonExistantTiles.map((tile) => (
          <div
            style={{ '--tile-x': tile.x, '--tile-y': tile.y } as CSSProperties}
            className="blocked"
            key={`minimap-${currentZone.name}-tile-${tile.id}`}
          />
        ))}
      </div>
    </div>
  )
}
