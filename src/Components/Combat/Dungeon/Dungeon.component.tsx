import { getDialogs } from '@/Helpers/Language'

import { leaveDungeon } from '@/Helpers/Systems/Dungeon'

import { useDungeonStore } from '@/Stores/Dungeon.store'

import { Text } from '@/Components/DesignSystem/Text'
import { Button } from '@/Components/DesignSystem/Button'

import './Dungeon.style.scss'

export const Dungeon = () => {
  const { dungeon } = useDungeonStore((state) => state)

  if (!dungeon) {
    return
  }

  const currentRoom = dungeon.rooms.length - 1
  const room = dungeon.possibleRooms[dungeon.rooms[currentRoom]]

  return (
    <div className="dungeon">
      <div>
        <Text>{getDialogs(dungeon.name)}</Text>
      </div>

      <div>
        <Text>{getDialogs(room.name)}</Text>
      </div>

      <div>
        <Button onClick={leaveDungeon}>Give up</Button>
      </div>
    </div>
  )
}
