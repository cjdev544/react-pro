import { createBrowserRouter } from 'react-router-dom'

import Root from './Root'
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage'

export const routesPath = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <ShoppingPage />,
      },
      {
        path: '/about',
        element: <h1>About Page</h1>,
      },
      {
        path: '/users',
        element: <h1>Users Page</h1>,
      },
      {
        path: '/*',
        element: <h1>Other route</h1>,
      },
    ],
  },
])
