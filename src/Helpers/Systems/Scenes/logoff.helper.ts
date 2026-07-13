import { deleteSession } from '@/Helpers/Systems/Data'
import { closeScene } from '@/Helpers/Systems/Scenes'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const logoff = () => {
  const { setProfile } = useProfileStore.getState()
  const { setBattle } = useBattleStore.getState()
  const { setDungeon } = useDungeonStore.getState()
  const { setDigivice } = useDigiviceStore.getState()

  setProfile(null)
  closeScene()
  setBattle(null)
  setDungeon(null)

  setDigivice({
    isOpen: false
  })

  deleteSession('profile')
  deleteSession('battle')
  deleteSession('dungeon')
}
