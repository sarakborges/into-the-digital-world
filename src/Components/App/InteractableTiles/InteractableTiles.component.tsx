import { Fragment } from 'react/jsx-runtime'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'

import { Dialog } from '@/Components/App/Dialog'

import './InteractableTiles.style.scss'
import { getTexts } from '@/Helpers/getTexts.helper'

export const InteractableTiles = () => {
  const profile = useProfileStore((state) => state.profile)
  const scene = useSceneStore((state) => state.scene)

  if (!profile?.currentZone || !!scene) {
    return
  }

  const currentZone: ZoneType =
    AllZones[profile.currentZone.id][profile.currentZone.map]

  const surroundingTiles = [
    ...currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x - 1 && tile.y === profile.currentZone.y
    ),
    ...currentZone.tiles.filter(
      (tile) =>
        tile.x === profile.currentZone.x + 1 && tile.y === profile.currentZone.y
    ),
    ...currentZone.tiles.filter(
      (tile) =>
        tile.y === profile.currentZone.y - 1 && tile.x === profile.currentZone.x
    ),
    ...currentZone.tiles.filter(
      (tile) =>
        tile.y === profile.currentZone.y + 1 && tile.x === profile.currentZone.x
    )
  ].filter(
    (tile) => !!tile.npc && (tile.condition === undefined || !!tile.condition())
  )

  const triggerEvent = (event) => {
    currentZone?.events?.[event]?.()
  }

  if (!surroundingTiles.length) {
    return
  }

  return (
    <aside className="interactable-tiles">
      {surroundingTiles.map((tile) => (
        <Fragment
          key={`interactable-tile-y-${tile!.y}-x${tile!.x}-${tile!.npc!.id}`}
        >
          {(!!tile?.events?.length || !!tile.defaultText) && (
            <div className="events">
              <div className="scene">
                <Dialog
                  content={
                    <div className="npc-dialogs">
                      {!!tile.defaultText && (
                        <Text as="p">{tile.defaultText}</Text>
                      )}

                      {!!tile.events?.length && (
                        <div className="events-list">
                          <Text>{getTexts('NPC_INTERACTIONS')}</Text>

                          {tile.events.map((event) => (
                            <Button
                              onClick={() => triggerEvent(event?.eventId)}
                              data-isimportant={event.eventType === 'important'}
                              key={`interactable-tile-y-${tile!.y}-x${tile!.x}-${tile!.npc!.id}-event-${event.eventId}`}
                            >
                              {event.eventType === 'important' && (
                                <AiOutlineExclamationCircle />
                              )}

                              {(!event.eventType ||
                                event.eventType === 'default') && (
                                <HiOutlineChatBubbleLeftEllipsis />
                              )}

                              <Text>{event.eventText}</Text>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  }
                  speaker={tile.npc}
                />
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </aside>
  )
}
