import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"

const NavLinks =(props) =>{

      const animateFrom = { opacity: 0, y: -40}
      const animateTo = { opacity: 1, y: 0}

    return (
        <motion.ul 
        initial = {animateFrom}
        animate = {animateTo}
        transition = {{delay: 0.05}}
        className='nav-menu'>
        <motion.li 
            initial = {animateFrom}
            animate = {animateTo}
            transition = {{delay: 0.15}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
              <NavLink className='nav-links' to="/">Inicio</NavLink>
        </motion.li >
        <motion.li 
            initial = {animateFrom}
            animate = {animateTo}
            transition = {{delay: 0.25}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
              <NavLink className='nav-links' to="/inmuebles">Inmuebles</NavLink>
        </motion.li>
        <motion.li 
            initial = {animateFrom}
            animate = {animateTo}
            transition = {{delay: 0.35}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
              <NavLink className='nav-links' to="/contacto">Contacto</NavLink>  
        </motion.li>
        <motion.li 
            initial = {animateFrom}
            animate = {animateTo}
            transition = {{delay: 0.45}}     
            onClick={() => props.isMobile && props.closeMobileMenu()}>
              <NavLink className='nav-links' to="/nuestra-trayectoria">Nuestra Trayectoria</NavLink>
        </motion.li>
        <motion.li 
            initial = {animateFrom}
            animate = {animateTo}
            transition = {{delay: 0.55}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
              <NavLink className='nav-links' to="/quienes-somos">Quienes Somos</NavLink>
        </motion.li>
    </motion.ul>
    )
}

export default NavLinks;