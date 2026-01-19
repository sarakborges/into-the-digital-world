import { MapTypes } from '@/Types/Map.type'
import {
  FaDollarSign,
  FaEllipsisH,
  FaExclamation,
  FaExclamationTriangle
} from 'react-icons/fa'
import { LuSwords } from 'react-icons/lu'

export const MAP_SUBTITLES = {
  [MapTypes.QUEST]: {
    id: MapTypes.QUEST,
    name: `Main quests`,
    icon: <FaExclamation />
  },

  [MapTypes.QUEST_REPEATABLE]: {
    id: MapTypes.QUEST_REPEATABLE,
    name: `Repeatable quests`,
    icon: <FaExclamation />
  },

  [MapTypes.COMMERCE]: {
    id: MapTypes.COMMERCE,
    name: `Shop`,
    icon: <FaDollarSign />
  },

  [MapTypes.EVENT]: {
    id: MapTypes.EVENT,
    name: `Special events`,
    icon: <FaEllipsisH />
  },

  [MapTypes.COMBAT]: {
    id: MapTypes.COMBAT,
    name: `Enemy`,
    icon: <LuSwords />
  },

  [MapTypes.BOSS]: {
    id: MapTypes.BOSS,
    name: `Elite enemy`,
    icon: <FaExclamationTriangle />
  }
}
