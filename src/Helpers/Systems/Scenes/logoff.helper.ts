import { deleteSession } from '@/Helpers/Systems/Data'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const logoff = () => {
  const { setProfile } = useProfileStore.getState()
  const { setScene } = useSceneStore.getState()
  const { setBattle } = useBattleStore.getState()
  const { setDungeon } = useDungeonStore.getState()
  const { setDigivice } = useDigiviceStore.getState()

  setProfile(null)
  setScene(null)
  setBattle(null)
  setDungeon(null)

  setDigivice({
    isOpen: false
  })

  deleteSession({ key: 'profile' })
  deleteSession({ key: 'battle' })
  deleteSession({ key: 'dungeon' })
}
