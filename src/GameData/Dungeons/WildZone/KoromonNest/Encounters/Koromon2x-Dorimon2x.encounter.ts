import { WildZoneDorimon } from '@/GameData/Dungeons/WildZone/KoromonNest/Enemies/Dorimon.enemy'
import { WildZoneKoromon } from '@/GameData/Dungeons/WildZone/KoromonNest/Enemies/Koromon.enemy'

export default {
  digimons: [
    { ...WildZoneKoromon },
    { ...WildZoneKoromon },
    { ...WildZoneDorimon },
    { ...WildZoneDorimon }
  ]
}
