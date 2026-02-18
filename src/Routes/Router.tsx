import { createBrowserRouter } from 'react-router'

import { ROUTES } from '@/Routes/Routes'

import { HomeRoute } from '@/Routes/Home.route'
import { MapsRoute } from '@/Routes/Maps.route'
import { BattleRoute } from '@/Routes/Battle.route'
import { StarterSelectionRoute } from '@/Routes/StarterSelection.route'
import { CreateProfileRoute } from '@/Routes/CreateProfile.route'
import { SettingsRoute } from '@/Routes/Settings.route'
import { WikiRoute } from '@/Routes/Wiki.route'
import { ComposeRoute } from '@/Routes/Compose.route'
import { ComposeDigimonRoute } from '@/Routes/ComposeDigimon.route'
import { CollectionRoute } from '@/Routes/Collection.route'

const routeComponents = {
  home: HomeRoute,
  maps: MapsRoute,
  battle: BattleRoute,
  starterSelection: StarterSelectionRoute,
  createProfile: CreateProfileRoute,
  settings: SettingsRoute,
  wiki: WikiRoute,
  compose: ComposeRoute,
  composeDigimon: ComposeDigimonRoute,
  collection: CollectionRoute
}

export const ROUTER = createBrowserRouter([
  ...Object.keys({ ...ROUTES }).map((routeItem) => {
    const { path, id } = ROUTES[routeItem]

    return {
      path: path,
      Component: routeComponents[id]
    }
  })
])
