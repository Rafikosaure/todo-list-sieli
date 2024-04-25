import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className ="header">
            <div className="div-image"><img src={logo} alt="logo"/></div>
            <nav>
                 <NavLink to={'/'} className={({ isActive }) =>
                  isActive
                  ? 'navlink navlink-disabled' 
                  : 'navlink navlink-enabled' 
                  }>Accueil</NavLink>
                <NavLink to={'/sign'}className={({ isActive }) =>
                 isActive
                  ? 'navlink navlink-disabled' 
                  : 'navlink navlink-enabled' }
                  >Se connecter</NavLink>       
            </nav>         
        </div>
    );
};

export default Header;