import { IntroductionScenes } from './Introduction'
import { AvatarCustomizationScenes } from './AvatarCustomization'
import { SaveGameScenes } from './SaveGame'
import { LogoffScenes } from './Logoff'
import { GetStarterDigimonScenes } from './GetStarterDigimon'
import { ProfileScenes } from './Profile'
import { AcquintancesScenes } from './Acquintances'
import { EncyclopediaScenes } from './Encyclopedia'
import { BattleScenes } from './Battle'
import { InventoryScenes } from './Inventory'

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
  battle: BattleScenes,
  inventory: InventoryScenes
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
