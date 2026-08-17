import { StartScreen } from '@/GameData/Scenes/StartScreen'

import { loadData, loadSession } from '@/Helpers/Systems/Data'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDialogStore } from '@/Stores/Dialog.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useSettingsStore } from '@/Stores/Settings.store'

export const loadGameSession = () => {
  const { setGame } = useGameStore.getState()
  const { setCurrentScene } = useSceneStore.getState()
  const { setDialog } = useDialogStore.getState()
  const { setProfile } = useProfileStore.getState()
  const { setDungeon } = useDungeonStore.getState()
  const { setBattle } = useBattleStore.getState()
  const { setSettings } = useSettingsStore.getState()

  try {
    const profile = loadSession(`profile`)
    const dungeon = loadSession(`dungeon`)
    const battle = loadSession(`battle`)

    setProfile(profile)
    setDungeon(dungeon)
    setBattle(battle)
    setDialog(null)

    setGame({
      hasGameStarted: false
    })

    setSettings({
      ...loadData('settings')
    })

    setCurrentScene(StartScreen)
  } catch (error) {
    console.warn(`Error loading game session: ${error}`)
  }
}
