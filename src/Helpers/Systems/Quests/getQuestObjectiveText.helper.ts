import { AllNpcs } from '@/GameData/Npcs'
import { AllZones } from '@/GameData/Zones'

import { getTexts } from '@/Helpers/Language'

export const getQuestObjectiveText = (objective: {
  type: string
  target: { type: string; id: string }
  where: string
  map: string
}) => {
  return getTexts('QUEST_OBJECTIVE')
    .replaceAll(
      '[TYPE]',
      getTexts(`QUEST_OBJECTIVE_TYPE_${objective.type.toLocaleUpperCase()}`)
    )
    .replaceAll(
      '[TARGET]',
      AllNpcs?.[objective.target.type]?.[objective.target.id].name
    )
    .replaceAll('[WHERE]', AllZones[objective.where].name)
    .replaceAll('[MAP]', AllZones[objective.where][objective.map].name)
}
