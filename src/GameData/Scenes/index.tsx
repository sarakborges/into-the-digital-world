import { AvatarCustomizationScenes } from './AvatarCustomization'
import { GetStarterDigimonScenes } from './GetStarterDigimon'
import { RenamePartnerScenes } from './RenamePartner'
import { IntroductionScenes } from './Introduction'
import { DeleteGameScenes } from './DeleteGame'
import { EquipmentScenes } from './Equipment'
import { SaveGameScenes } from './SaveGame'
import { ResearchScenes } from './Research'
import { LocationScenes } from './Location'
import { DungeonScenes } from './Dungeon'
import { ComposeScenes } from './Compose'
import { LogoffScenes } from './Logoff'
import { BattleScenes } from './Battle'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

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
  [DeleteGameScenes.id]: DeleteGameScenes,
  [DungeonScenes.id]: DungeonScenes
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
