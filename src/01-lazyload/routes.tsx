import LazyPage1 from './pages/LazyPage1'
import LazyPage2 from './pages/LazyPage2'
import LazyPage3 from './pages/LazyPage3'

interface Route {
  path: string
  element: JSX.Element
  name: string
}

export const lazyLayoutRoutes: Route[] = [
  {
    path: '',
    element: <LazyPage1 />,
    name: 'Lazy Page 1',
  },
  {
    path: 'lazy1',
    element: <LazyPage1 />,
    name: 'Lazy Page 1',
  },
  {
    path: 'lazy2',
    element: <LazyPage2 />,
    name: 'Lazy Page 2',
  },
  {
    path: 'lazy3',
    element: <LazyPage3 />,
    name: 'Lazy Page 3',
  },
]
