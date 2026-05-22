import { IntroductionScenes } from '@/GameData/Scenes/Introduction'
import { AvatarCustomizationScenes } from '@/GameData/Scenes/AvatarCustomization'
import { SaveGameScenes } from '@/GameData/Scenes/SaveGame'
import { LogoffScenes } from '@/GameData/Scenes/Logoff'
import { GetStarterDigimonScenes } from '@/GameData/Scenes/GetStarterDigimon'
import { ProfileScenes } from '@/GameData/Scenes/Profile'
import { AcquintancesScenes } from '@/GameData/Scenes/Acquintances'
import { EncyclopediaScenes } from '@/GameData/Scenes/Encyclopedia'
import { BattleScenes } from '@/GameData/Scenes/Battle'

import { useScene } from '@/Hooks/Scene.hook'

export const AllScenes = {
  introduction: IntroductionScenes,
  avatarCustomization: AvatarCustomizationScenes,
  saveGame: SaveGameScenes,
  logoff: LogoffScenes,
  getStarterDigimon: GetStarterDigimonScenes,
  acquintances: AcquintancesScenes,
  profile: ProfileScenes,
  encyclopedia: EncyclopediaScenes,
  battle: BattleScenes
}

export const Scene = () => {
  const { scene } = useScene()

  if (!scene) {
    return
  }

  const RenderedScene =
    AllScenes[scene?.currentScene!][scene?.currentStage || '001']

  if (!RenderedScene) {
    return
  }

  return (
    <div className="scene">
      <RenderedScene />
    </div>
  )
}
