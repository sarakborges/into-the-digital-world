import type { CSSProperties } from 'react'
import { BiSolidUserCircle } from 'react-icons/bi'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { GiCrossedSwords, GiPortal } from 'react-icons/gi'
import { TbStars } from 'react-icons/tb'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

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
    (tile) => (tile.condition === undefined || !!tile.condition()) && !!tile.npc
  )

  const events = currentZone.tiles.filter(
    (tile) =>
      (tile.condition === undefined || !!tile.condition()) &&
      (!!tile.onEnter || !!tile.events?.length)
  )

  const tiles: Array<{ id: string; type: string; x: number; y: number }> = []

  const tileIcons = {
    dungeon: <GiCrossedSwords />,
    npc: <HiOutlineChatBubbleLeftEllipsis />,
    event: <TbStars />,
    warp: <GiPortal />,
    player: <BiSolidUserCircle />,
    important: <AiOutlineExclamationCircle />
  }

  for (let y = 1; y <= Number(currentZone.gridSize); y++) {
    for (let x = 1; x <= Number(currentZone.gridSize); x++) {
      let type = 'floor'

      if (!currentZone?.grid[y]?.[x]) {
        type = 'blocked'
      }

      if (profile.currentZone.x === x && profile.currentZone.y === y) {
        type = 'player'
      }

      if (events.some((tile) => tile.x === x && tile.y === y)) {
        type = 'event'
      }

      if (
        events.some(
          (tile) =>
            tile.x === x && tile.y === y && tile.onEnter?.type === 'warp'
        )
      ) {
        type = 'warp'
      }

      if (npcs.some((tile) => tile.x === x && tile.y === y)) {
        type = 'npc'
      }

      if (
        events.some(
          (tile) =>
            tile.x === x &&
            tile.y === y &&
            tile.events?.some((event) => event.eventType === 'important')
        )
      ) {
        type = 'important'
      }

      if (
        events.some(
          (tile) =>
            tile.x === x &&
            tile.y === y &&
            tile.events?.some((event) => event.eventType === 'dungeon')
        )
      ) {
        type = 'dungeon'
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
          >
            {tileIcons[tile.type]}
          </div>
        ))}
      </div>
    </div>
  )
}
