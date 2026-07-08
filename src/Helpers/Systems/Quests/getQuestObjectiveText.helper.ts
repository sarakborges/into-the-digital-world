import { AllZones } from '@/GameData/Zones'
import { AllNpcs } from '@/GameData/Npcs'

import { getTranslation } from '@/Helpers/Language'

import type { ZoneType } from '@/Types/Zone.type'

export const getQuestObjectiveText = (objective: {
  type: string
  target: { type: string; id: string }
  where: string
  map: string
}) => {
  return getTranslation('QUEST_OBJECTIVE', {
    '[TYPE]': getTranslation(
      `QUEST_OBJECTIVE_TYPE_${objective.type.toLocaleUpperCase()}`
    ),
    '[TARGET]': AllNpcs?.[objective.target.type]?.[objective.target.id].name,
    '[WHERE]': AllZones[objective.where].name,
    '[MAP]': (AllZones[objective.where][objective.map] as ZoneType).name
  })
}
