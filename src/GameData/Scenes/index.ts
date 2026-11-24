import { LoadSaves } from '@/GameData/Scenes/LoadSaves'
import { RootDomainDorms } from '@/GameData/Scenes/RootDomainDorms'
import { RootDomainLounge } from '@/GameData/Scenes/RootDomainLounge/RootDomainLounge.scene'
import { Settings } from '@/GameData/Scenes/Settings'
import { StartScreen } from '@/GameData/Scenes/StartScreen'

export const AllScenes = {
  startScreen: {
    component: StartScreen
  },

  loadSaves: {
    component: LoadSaves
  },

  settings: {
    component: Settings
  },

  rootDomainDorms: {
    name: `Root Domain - Dorms`,
    component: RootDomainDorms
  },

  rootDomainLounge: {
    name: `Root Domain - Lounge`,
    component: RootDomainLounge
  }
}
