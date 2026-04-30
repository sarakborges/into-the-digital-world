import type { NpcType } from '@/Types/Npc.type'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { getTexts } from '@/Helpers/getTexts.helper'

import * as Zones from '@/GameData/Zones'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'

import './InteractableNpcs.style.scss'

export const InteractableNpcs = () => {
  const { profile } = useProfile()
  const { setScene } = useScene()

  if (!profile) {
    return
  }

  const currentZone = { ...Zones[profile.currentZone || 'RootDomain'] }

  const events: { [k: string]: NpcType } = {
    'x-1y0': currentZone.grid[profile.currentY][profile.currentX - 1]?.npc,
    'x+1y0': currentZone.grid[profile.currentY][profile.currentX + 1]?.npc,
    'xy+1': currentZone.grid[profile.currentY - 1][profile.currentX]?.npc,
    'x0y+1': currentZone.grid[profile.currentY + 1][profile.currentX]?.npc
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
          key={`interactable-npc-y-${profile.currentY}-x${profile.currentX}-${event.id}`}
          className="npc"
        >
          <header>
            <Text>{event.name}</Text>
            <Portrait alt={event.name} src={`/${event.portrait}.webp`} />
          </header>

          <footer>
            <Button onClick={talkToNpc}>{getTexts('NPC_INTERACT')}</Button>
          </footer>
        </div>
      ))}
    </aside>
  )
}
