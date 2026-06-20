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
import { DeleteGameScenes } from './DeleteGame'

import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useBattleStore } from '@/Stores/Battle.store'

export const AllScenes = {
  [IntroductionScenes.id]: IntroductionScenes,
  [AvatarCustomizationScenes.id]: AvatarCustomizationScenes,
  [SaveGameScenes.id]: SaveGameScenes,
  [LogoffScenes.id]: LogoffScenes,
  [GetStarterDigimonScenes.id]: GetStarterDigimonScenes,
  [BattleScenes.id]: BattleScenes,
  [RenamePartnerScenes.id]: RenamePartnerScenes,
  [ResearchScenes.id]: ResearchScenes,
  [ComposeScenes.id]: ComposeScenes,
  [EquipmentScenes.id]: EquipmentScenes,
  [LocationScenes.id]: LocationScenes,
  [DeleteGameScenes.id]: DeleteGameScenes
}

export const Scene = () => {
  const { scene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  if (!scene || !digivice) {
    return
  }

  const RenderedScene = AllScenes[scene.currentScene!][scene.currentStage]

  if (!RenderedScene) {
    return
  }

  return (
    <div
      className="scene"
      data-isdigiviceopen={!!digivice.isOpen}
      data-isinbattle={!!battle}
    >
      <RenderedScene />
    </div>
  )
}
