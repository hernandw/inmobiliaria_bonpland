import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return ( 
        <header>
          <nav className='navbar'>
                  <div className="navbar-logo">
                        <img src="../assets/logo_ilustrator.png" alt="logo"/>
                  </div>
              <ul className='nav-menu'>
                  <li>
                        <NavLink className='nav-links' to="/">Inicio</NavLink>
                  </li>
                  <li>
                        <NavLink className='nav-links' to="/inmuebles">Inmuebles</NavLink>
                  </li>
                  <li>
                        <NavLink className='nav-links' to="/contacto">Contacto</NavLink>  
                  </li>
                  <li>
                        <NavLink className='nav-links' to="/nuestra-trayectoria">Nuestra Trayectoria</NavLink>
                  </li>
                  <li>
                        <NavLink className='nav-links' to="/quienes-somos">Quienes Somos</NavLink>
                  </li>
              </ul>
          </nav>
          </header>

  )};

export default Navbar;
