import { getDialogs } from '@/Helpers/Language'

import { useDungeonStore } from '@/Stores/Dungeon.store'

import { Text } from '@/Components/DesignSystem/Text'

import './Dungeon.style.scss'

export const Dungeon = () => {
  const { dungeon } = useDungeonStore((state) => state)

  if (!dungeon) {
    return
  }

  return (
    <div className="dungeon">
      <Text>{getDialogs(dungeon.name)}</Text>
    </div>
  )
}
