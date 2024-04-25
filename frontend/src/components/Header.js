import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import Logo from '../images/todolist.png'


export default function Header() {

  return (
    <div className='header'>
      <div className='div-image'><img src={Logo} alt="logo" /><h1 className='title'>ToDo.com</h1></div>
      <nav>
        <NavLink to={'/'} className={({ isActive }) =>
          isActive
            ? 'navlink navlink-disabled'
            : 'navlink navlink-enabled'
        }>Accueil</NavLink>
      </nav>
    </div>
  )
}
