import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <header>
      <div>
          <img src="../assets/bonpland.jfif" alt="logo"/>
          <nav>
              <ul>
                  <li>
                        <NavLink to="/">Inicio</NavLink>
                  </li>
                  <li>
                        <NavLink to="/inmuebles">Inmuebles</NavLink>
                  </li>
                  <li>
                        <NavLink to="/contacto">Contacto</NavLink>  
                  </li>
                  <li>
                        <NavLink to="/nuestra-trayectoria">Nuestra Trayectoria</NavLink>
                  </li>
                  <li>
                        <NavLink to="/quienes-somos">Quienes Somos</NavLink>
                  </li>
              </ul>
          </nav>
      </div>
  </header>;
};

export default Navbar;
