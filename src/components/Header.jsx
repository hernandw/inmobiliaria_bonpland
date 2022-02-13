import React from 'react';
import './Header.css'
import Navbar from './Navbar/Navbar';

export const Header = () => {
  return (
      <section className='heroSection'>
          <Navbar/>
      <div className="container">
            <div className="text">
                <h1>¡Antes de creer todo lo que ves, Hazle Zoom!</h1>
                <h3>Más que un portal, un experto inmobiliario</h3>
            </div>
      </div>
  
      </section>
  )
}