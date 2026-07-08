import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'

import { Fragment } from 'react/jsx-runtime'

import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { getActiveEvents, getInteractableTiles } from '@/Helpers/Systems/Zones'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

import './InteractableTiles.style.scss'

export const InteractableTiles = () => {
  const { profile } = useProfileStore((state) => state)
  const { scene } = useSceneStore((state) => state)
  const { dungeon } = useDungeonStore((state) => state)

  if (!profile?.currentZone || !!scene || !!dungeon) {
    return
  }

  const currentZone: ZoneType = AllZones[profile.currentZone.id][
    profile.currentZone.map
  ] as ZoneType

  const surroundingTiles = getInteractableTiles(currentZone, profile)

  if (!surroundingTiles.length) {
    return
  }

  return (
    <aside className="interactable-tiles">
      {surroundingTiles.map((tile) => {
        const events = getActiveEvents(tile)

        return (
          <Fragment key={`interactable-tile-y-${tile.y}-x${tile.x}-${tile.id}`}>
            {(!!events?.length || !!tile.defaultText) && (
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

                        {!!events?.length && (
                          <div className="events-list">
                            {events.map((event) => (
                              <div
                                key={`interactable-tile-y-${tile.y}-x${tile.x}-${tile.id}-event-${event.function}`}
                              >
                                <Button
                                  onClick={() => event?.function()}
                                  data-isimportant={
                                    event.eventType === 'important'
                                  }
                                >
                                  {event.eventType === 'dungeon' && <BsEye />}

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
        )
      })}
    </aside>
  )
}
