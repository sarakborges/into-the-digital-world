import { IntroductionScenes } from './Introduction'
import { AvatarCustomizationScenes } from './AvatarCustomization'
import { SaveGameScenes } from './SaveGame'
import { LogoffScenes } from './Logoff'
import { GetStarterDigimonScenes } from './GetStarterDigimon'
import { BattleScenes } from './Battle'
import { RenamePartnerScenes } from './RenamePartner'
import { ResearchScenes } from './Research'
import { ComposeScenes } from './Compose'
import { EquipmentScenes } from './Equipment'
import { LocationScenes } from './Location'

import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

export const AllScenes = {
  introduction: IntroductionScenes,
  avatarCustomization: AvatarCustomizationScenes,
  saveGame: SaveGameScenes,
  logoff: LogoffScenes,
  getStarterDigimon: GetStarterDigimonScenes,
  battle: BattleScenes,
  renamePartner: RenamePartnerScenes,
  research: ResearchScenes,
  compose: ComposeScenes,
  equipment: EquipmentScenes,
  location: LocationScenes
}

export const Scene = () => {
  const { scene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!scene || !digivice) {
    return
  }

  const RenderedScene = AllScenes[scene.currentScene!][scene.currentStage]

  if (!RenderedScene) {
    return
  }

  return (
    <div className="scene" data-isdigiviceopen={!!digivice.isOpen}>
      <RenderedScene />
    </div>
  )
}
