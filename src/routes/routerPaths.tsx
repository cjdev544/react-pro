/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Root from './Root'
import NoLazy from '../01-lazyload/pages/NoLazy'
import { lazyLayoutRoutes } from '../01-lazyload/routes'

interface Route {
  path: string
  element: JSX.Element
  name: string
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
  {
    path: '/lazy-layout',
    element: <LazyLayout />,
    name: 'Lazy Layout Dash',
  },
  {
    path: '/no-lazy',
    element: <NoLazy />,
    name: 'No Lazy Load',
  },
]

export const routerPaths = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/lazy-layout',
        element: (
          <Suspense fallback={<h3>Cargando...</h3>}>
            <LazyLayout />
          </Suspense>
        ),
        children: lazyLayoutRoutes,
      },
      {
        path: '/no-lazy',
        element: <NoLazy />,
      },
    ],
  },
])
