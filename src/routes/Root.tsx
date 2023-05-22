import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../assets/react.svg'

export default function Root() {
  return (
    <div className='main-layout'>
      <nav>
        <img className='logo' src={Logo} alt='Logo' />
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
              to='/lazy1'
            >
              LazyPage1
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
              to='/lazy2'
            >
              LazyPage2
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
              to='/lazy3'
            >
              LazyPage3
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
