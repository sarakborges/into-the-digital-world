import { IntroductionScenes } from './Introduction'
import { AvatarCustomizationScenes } from './AvatarCustomization'
import { SaveGameScenes } from './SaveGame'
import { LogoffScenes } from './Logoff'
import { GetStarterDigimonScenes } from './GetStarterDigimon'
import { BattleScenes } from './Battle'
import { RenamePartnerScenes } from './RenamePartner'

import { useSceneStore } from '@/Stores/Scene.store'

export const AllScenes = {
  introduction: IntroductionScenes,
  avatarCustomization: AvatarCustomizationScenes,
  saveGame: SaveGameScenes,
  logoff: LogoffScenes,
  getStarterDigimon: GetStarterDigimonScenes,
  battle: BattleScenes,
  renamePartner: RenamePartnerScenes
}

export const Scene = () => {
  const scene = useSceneStore((state) => state.scene)

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
