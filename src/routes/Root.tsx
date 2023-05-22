import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../assets/react.svg'
import { routes } from './routerPaths'

export default function Root() {
  return (
    <div className='main-layout'>
      <nav>
        <img className='logo' src={Logo} alt='Logo' />
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to={route.path}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
