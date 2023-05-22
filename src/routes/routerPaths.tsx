import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import LazyPage1 from '../01-lazyload/pages/LazyPage1'
import LazyPage2 from '../01-lazyload/pages/LazyPage2'
import LazyPage3 from '../01-lazyload/pages/LazyPage3'

export const routerPaths = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/lazy1',
        element: <LazyPage1 />,
      },
      {
        path: '/lazy2',
        element: <LazyPage2 />,
      },
      {
        path: '/lazy3',
        element: <LazyPage3 />,
      },
      {
        path: '/*',
        element: <h1>Other route</h1>,
      },
    ],
  },
])
