import { BiDizzy } from 'react-icons/bi'
import { FaFlask, FaQuestion, FaSkull, FaWind } from 'react-icons/fa'

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
}
