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

export const InteractableTiles = () => {
  const { profile } = useProfileStore((state) => state)
  const { scene } = useSceneStore((state) => state)

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
  ].filter((tile) => tile.condition === undefined || !!tile.condition())

  if (!surroundingTiles.length) {
    return
  }

  return (
    <aside className="interactable-tiles">
      {surroundingTiles.map((tile) => (
        <Fragment key={`interactable-tile-y-${tile.y}-x${tile.x}-${tile.id}`}>
          {(!!tile?.events?.length || !!tile.defaultText) && (
            <div className="events">
              <div className="scene">
                <Dialog
                  content={
                    <div className="npc-dialogs">
                      {!!tile.defaultText && (
                        <div className="text-bubble">
                          <Text as="p">{tile.defaultText}</Text>
                        </div>
                      )}

                      {!!tile.events?.length && (
                        <div className="events-list">
                          {tile.events.map((event) => (
                            <div
                              key={`interactable-tile-y-${tile.y}-x${tile.x}-${tile.id}-event-${event.function}`}
                            >
                              <Button
                                onClick={() => event?.function()}
                                data-isimportant={
                                  event.eventType === 'important'
                                }
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
                            </div>
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
