import React from 'react';
import Navbar from './Navbar';
import './Header.css'

export const Header = () => {
  return (
      <section className='heroSection'>
          <Navbar/>
          <div className='slogan'>
              <div className="text">
            <h1>¡Antes de creer todo lo que ves, Hazle Zoom!</h1>
            <h3>Más que un portal, un experto inmobiliario</h3>

              </div>
          </div>
      </section>
  )
}