import { RiHome9Fill } from 'react-icons/ri'
import { MdMenuBook, MdOutlineExplore } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'

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
    ...ROUTES.COMPOSE,
    text: `Compose`,
    icon: <FaReact />
  },

  {
    ...ROUTES.WIKI,
    text: `Digi Wiki`,
    icon: <MdMenuBook />
  },

  {
    ...ROUTES.SETTINGS,
    text: `Settings`,
    icon: <IoIosSettings />
  }
]
