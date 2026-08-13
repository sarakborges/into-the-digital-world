import { movePlayer } from './movePlayer.helper'

import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const setLocation = ({ x, y }: { x?: number; y?: number }) => {
  const coordinates = movePlayer({ x, y })

  if (!coordinates) {
    return
  }

  const { profile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  const currentMap = getCurrentMap()

  if (!currentMap) {
    return
  }

  const onEnterEvent = currentMap?.tiles.find(
    (event) =>
      coordinates.x === event.x &&
      event.y === coordinates.y &&
      !!event.onEnter &&
      (!event.condition || !!event.condition()) &&
      (!event.onEnter.condition || !!event.onEnter.condition())
  )

  if (!onEnterEvent) {
    return
  }

  onEnterEvent.onEnter?.function()
}
