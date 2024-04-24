import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import Logo from '../images/todolist.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='div-image'><img src={Logo} alt="logo" /></div>
      <nav>
        <NavLink to={'/'} className={({ isActive }) =>
            isActive
              ? 'navlink navlink-disabled'
              : 'navlink navlink-enabled'
        }>Accueil</NavLink>
        <NavLink to={'/sign'} className={({ isActive }) =>
            isActive
            ? 'navlink navlink-disabled'
            : 'navlink navlink-enabled'
        }>Se connecter</NavLink>
      </nav>
    </div>
  )
}
