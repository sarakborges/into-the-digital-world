import { FaExclamation } from 'react-icons/fa6'
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2'
import { MdMyLocation } from 'react-icons/md'

import {
  canMoveToCoordinate,
  getGamepadCoordinates,
  getInteractableTiles,
  setLocation
} from '@/Helpers/Systems/Zones'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'

import './Gamepad.style.scss'

export const Gamepad = () => {
  const { profile } = useProfileStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)
  const { game } = useGameStore((state) => state)

  if (!profile || !!scene) {
    return
  }

  const coordinates = getGamepadCoordinates().map((coordinate) => ({
    ...coordinate,
    canMove: !!coordinate && canMoveToCoordinate({ ...coordinate })
  }))

  const possibleInteractions = getInteractableTiles()

  return (
    <aside className="gamepad">
      {coordinates.map((coordinate, coordinateIndex) => {
        const interaction = possibleInteractions.find(
          (possibleInteraction) =>
            possibleInteraction.x ===
              profile.currentZone.x + (coordinate.x || 0) &&
            possibleInteraction.y ===
              profile.currentZone.y + (coordinate.y || 0)
        )

        return (
          <div key={`gamepad-${coordinateIndex}`}>
            <Button
              className="npc-interaction-button"
              variant="secondary"
              onClick={() => setScene(interaction?.scene || null)}
              data-isvisible={
                !!interaction?.scene &&
                (!interaction.condition || !!interaction.condition()) &&
                !!interaction?.npc?.isVisible
              }
            >
              <HiOutlineChatBubbleLeftEllipsis />
            </Button>

            <Button
              className="event-interaction-button"
              variant="secondary"
              onClick={() => setScene(interaction?.scene || null)}
              data-isvisible={
                !!interaction?.scene &&
                (!interaction.condition || !!interaction.condition()) &&
                !interaction?.npc?.isVisible
              }
            >
              <FaExclamation />
            </Button>

            <Button
              className="move-character-button"
              disabled={
                !!game?.isWarping ||
                !!interaction?.scene ||
                !coordinate.canMove ||
                (!!interaction?.condition && !interaction.condition())
              }
              onClick={() => setLocation({ ...coordinate })}
            >
              <MdMyLocation />
            </Button>
          </div>
        )
      })}
    </aside>
  )
}
