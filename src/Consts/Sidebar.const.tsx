import { RiHome9Fill } from 'react-icons/ri'
import { MdOutlineExplore } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'

import { ROUTES } from '@/Routes/Routes'

export const SIDEBAR_MENU = [
  {
    ...ROUTES.HOME,
    text: `Start`,
    icon: <RiHome9Fill />
  },

  {
    ...ROUTES.MAPS,
    text: `Explore`,
    icon: <MdOutlineExplore />
  },

  {
    ...ROUTES.SETTINGS,
    text: `Settings`,
    icon: <IoIosSettings />
  }
]
