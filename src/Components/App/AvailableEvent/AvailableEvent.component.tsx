import type { NpcType } from '@/Types/Npc.type'

import { useGame } from '@/Hooks/Game.hook'

import { getTexts } from '@/Texts'

import * as Zones from '@/GameData/Zones'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'

import './AvailableEvent.style.scss'

export const AvailableEvent = () => {
  const { game, setGame } = useGame()

  if (!game) {
    return
  }

  const currentZone = { ...Zones[game.currentZone] }

  const events: { [k: string]: NpcType } = {
    'x-1y0': currentZone.grid[game.currentY][game.currentX - 1].npc,
    'x+1y0': currentZone.grid[game.currentY][game.currentX + 1].npc,
    'xy+1': currentZone.grid[game.currentY - 1][game.currentX].npc,
    'x0y+1': currentZone.grid[game.currentY + 1][game.currentX].npc
  }

  const filteredEvents = Object.values(events).filter((event) => !!event)

  if (!filteredEvents.length) {
    return
  }

  return (
    <aside className="available-events">
      {filteredEvents.map((event) => (
        <div
          key={`available-event-y-${game.currentY}-x${game.currentX}-${event.id}`}
          className="event"
        >
          <Portrait alt={event.name} src={`/${event.portrait}.jpg`} />

          <Text>{event.name}</Text>

          <Button>{getTexts('NPC_INTERACT')}</Button>
        </div>
      ))}
    </aside>
  )
}
