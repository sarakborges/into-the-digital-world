import { RiHome9Fill } from 'react-icons/ri'
import { MdMenuBook, MdOutlineExplore } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { HiCollection } from 'react-icons/hi'

import { ROUTES } from '@/Routes/Routes'
import { PiFileMagnifyingGlassDuotone } from 'react-icons/pi'

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
    ...ROUTES.COLLECTION,
    text: `Collection`,
    icon: <HiCollection />
  },

  {
    ...ROUTES.COMPOSE,
    text: `Compose`,
    icon: <FaReact />
  },

  {
    ...ROUTES.RESEARCH,
    text: `Research`,
    icon: <PiFileMagnifyingGlassDuotone />
  }
]

export const SIDEBAR_BOTTOM_MENU = [
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
