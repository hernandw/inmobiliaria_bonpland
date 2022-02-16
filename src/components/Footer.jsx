import React from 'react';
import { NavLink } from 'react-router-dom';

import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import { ImLocation, ImPhone } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';

import './Footer.css'

const Footer = () => {
  return <footer className='footerContainer'>
      <div>
        <div className='footerColumn'>
          <h2>Contáctanos</h2>
          <hr />
          <p> <ImLocation />  Dirección: Córdoba 555</p>
          <p> <ImPhone /> Teléfono: +54 (11) 156000000</p>
          <p> <NavLink className="pLink" to='/contacto'><FiMail /> Déjanos tu mensaje</NavLink></p>
        </div>
        <div className='footerColumn'>
          <h2>Síguenos en</h2>
          <hr />
          <div className='columnLogos'>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"> 
              <BsFacebook className='footerLogo' size='35px' color='#3b5998'/> 
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener"> 
              <BsInstagram className='footerLogo' size='35px' color='#3f729b'/> 
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer noopener"> 
              <BsTwitter className='footerLogo' size='35px' color='#00acee'/> 
            </a>
          </div>
        </div>
      </div>
      <p className='textCopyrigth'>© 2022 Inmobiliaria Bonpland | Desarrollado por #equipo229 para
        <a href='https://idforideas.com/' target="_blank" rel="noreferrer noopener"> ID for Ideas</a>
      </p>
  </footer>;
};

export default Footer;
