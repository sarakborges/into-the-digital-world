import { findNpc } from '@/GameData/Registries/Npc.registry'
import {
  getMapDefinition,
  getZoneDefinition
} from '@/GameData/Registries/ZoneManifest.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

export const getQuestObjectiveText = (objective: {
  type: string
  target: { type: string; id: string }
  where: string
  map: string
}) => {
  return getTexts('QUEST_OBJECTIVE', {
    '[TYPE]': getTexts(
      `QUEST_OBJECTIVE_TYPE_${objective.type.toLocaleUpperCase()}`
    ),
    '[TARGET]':
      findNpc({
        category: objective.target.type,
        npcId: objective.target.id
      })?.name ?? '',
    '[WHERE]': getZoneDefinition(objective.where).name,
    '[MAP]': getMapDefinition({ zone: objective.where, map: objective.map })
      .name
  })
}
