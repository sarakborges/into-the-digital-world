import { createBrowserRouter } from 'react-router'

import { ROUTES } from './Routes'

import { HomeRoute } from './Home.route'
import { MapsRoute } from './Maps.route'
import { BattleRoute } from './Battle.route'
import { StarterSelectionRoute } from './StarterSelection.route'
import { CreateProfileRoute } from './CreateProfile.route'
import { SettingsRoute } from './Settings.route'
import { WikiRoute } from './Wiki.route'

const routeComponents = {
  home: HomeRoute,
  maps: MapsRoute,
  battle: BattleRoute,
  starterSelection: StarterSelectionRoute,
  createProfile: CreateProfileRoute,
  settings: SettingsRoute,
  wiki: WikiRoute
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
