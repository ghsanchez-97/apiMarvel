// Import react
import { memo } from 'react'
// Import react router dom
import { NavLink } from 'react-router-dom'
// Import Styles
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__link'>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/'>
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/characters'>
          Personajes
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/comics'>
          Comics
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/creator'>
          Creadores
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/events'>
          Eventos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/series'>
          Series
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/stories'>
          Historias
        </NavLink>
      </ul>
    </nav>
  )
}

export default memo(Navbar)
