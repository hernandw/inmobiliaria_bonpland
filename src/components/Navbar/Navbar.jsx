import React from 'react';
import MobileNavigation from './MobileNavigation';
import './Navbar.css'
import Navigation from './Navigation';



const Navbar = () => {
  return ( 
        <header>
          <nav className='navbar'>
                  <div className="navbar-logo">
                        <img src="../assets/logo_ilustrator.png" alt="logo"/>
                  </div>
                  <Navigation/>
                  <MobileNavigation/>
          </nav>
          </header>

  )};

export default Navbar;
