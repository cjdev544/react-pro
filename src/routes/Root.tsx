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
              to='/'
            >
              Shopping
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
              to='/users'
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
