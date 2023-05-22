import { NavLink, Outlet } from 'react-router-dom'

export default function LazyLayout() {
  return (
    <div>
      <h1>LazyLayout</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
            to='lazy1'
          >
            Lazy Page 1
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
            to='lazy2'
          >
            Lazy Page 2
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
            to='lazy3'
          >
            Lazy Page 3
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
