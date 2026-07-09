import { AvatarCustomizationScenes } from './AvatarCustomization'
import { BattleScenes } from './Battle'
import { ComposeScenes } from './Compose'
import { DeleteGameScenes } from './DeleteGame'
import { DungeonScenes } from './Dungeon'
import { EquipmentScenes } from './Equipment'
import { GetStarterDigimonScenes } from './GetStarterDigimon'
import { IntroductionScenes } from './Introduction'
import { LocationScenes } from './Location'
import { LogoffScenes } from './Logoff'
import { RenamePartnerScenes } from './RenamePartner'
import { ResearchScenes } from './Research'
import { SaveGameScenes } from './SaveGame'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

// eslint-disable-next-line react-refresh/only-export-components
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
