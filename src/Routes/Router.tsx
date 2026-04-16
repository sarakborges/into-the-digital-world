import { createBrowserRouter } from 'react-router'

import { ROUTES } from '@/Routes/Routes'

import { HomeRoute } from '@/Routes/Home.route'

const routeComponents = {
  home: HomeRoute
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
