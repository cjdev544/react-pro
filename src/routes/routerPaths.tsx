/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import { Suspense, lazy } from 'react'

interface Route {
  path: string
  element: JSX.Element
  name: string
}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
  {
    path: '/lazy1',
    element: (
      <Suspense fallback={<h3>Cargando...</h3>}>
        <Lazy1 />
      </Suspense>
    ),
    name: 'Lazy Page 1',
  },
  {
    path: '/lazy2',
    element: (
      <Suspense fallback={<h3>Cargando...</h3>}>
        <Lazy2 />
      </Suspense>
    ),
    name: 'Lazy Page 2',
  },
  {
    path: '/lazy3',
    element: (
      <Suspense fallback={<h3>Cargando...</h3>}>
        <Lazy3 />
      </Suspense>
    ),
    name: 'Lazy Page 3',
  },
]

export const routerPaths = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: routes,
  },
])
