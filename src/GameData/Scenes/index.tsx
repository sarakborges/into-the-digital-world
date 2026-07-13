import { AvatarCustomizationScenes } from './Apps/AvatarCustomization'
import { BattleScenes } from './Apps/Battle'
import { ComposeScenes } from './Apps/Compose'
import { DeleteGameScenes } from './Apps/DeleteGame'
import { DungeonScenes } from './Apps/Dungeon'
import { EquipmentScenes } from './Apps/Equipment'
import { LocationScenes } from './Apps/Location'
import { LogoffScenes } from './Apps/Logoff'
import { RenamePartnerScenes } from './Apps/RenamePartner'
import { ResearchScenes } from './Apps/Research'
import { SaveGameScenes } from './Apps/SaveGame'
import { GetStarterDigimonScenes } from './Story/GetStarterDigimon'
import { IntroductionScenes } from './Story/Introduction'

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
