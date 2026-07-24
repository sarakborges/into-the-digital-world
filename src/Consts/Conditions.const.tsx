import { BiDizzy } from 'react-icons/bi'
import { FaFlask, FaQuestion, FaSkull, FaWind } from 'react-icons/fa'

import type { ConditionId, ConditionsType } from '@/Types/Condition.type'

export const CONDITIONS = {
  shaken: {
    icon: <FaWind />,
    color: '#60A5FA'
  },

  poisoned: {
    icon: <FaSkull />,
    color: '#22C55E'
  },

  stunned: {
    icon: <BiDizzy />,
    color: '#FACC15'
  },

  irritated: {
    icon: <FaFlask />,
    color: '#84CC16'
  },

  distracted: {
    icon: <FaQuestion />,
    color: '#A78BFA'
  }
} satisfies ConditionsType

export const isConditionId = (condition: string): condition is ConditionId => {
  return condition in CONDITIONS
}
