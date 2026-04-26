import type { NpcType } from '@/Types/Npc.type'

import { useGame } from '@/Hooks/Game.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { getTexts } from '@/Helpers/getTexts.helper'

import * as Zones from '@/GameData/Zones'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'

import './InteractableNpcs.style.scss'

export const InteractableNpcs = () => {
  const { game } = useGame()
  const { setScene } = useScene()

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

  const talkToNpc = () => {
    setScene({
      currentScene: 'avatarCustomization',
      currentStage: '001'
    })
  }

  return (
    <aside className="interactable-npcs">
      {filteredEvents.map((event) => (
        <div
          key={`interactable-npc-y-${game.currentY}-x${game.currentX}-${event.id}`}
          className="npc"
        >
          <header>
            <Portrait alt={event.name} src={`/${event.portrait}.jpg`} />

            <Text>{event.name}</Text>
          </header>

          <footer>
            <Button onClick={talkToNpc}>{getTexts('NPC_INTERACT')}</Button>
          </footer>
        </div>
      ))}
    </aside>
  )
}
