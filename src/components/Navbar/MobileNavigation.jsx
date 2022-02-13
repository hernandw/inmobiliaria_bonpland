import NavLinks from "./NavLinks";
import {ImMenu} from 'react-icons/im';
import {IoMdCloseCircle} from 'react-icons/io';
import { useState } from "react";



const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon =  <ImMenu className="hamburger" 
                          size='35px' color="purple"
                          onClick ={() => setOpen(!open)}
                          />
  const closeIcon =  <IoMdCloseCircle className="hamburger" 
                          size='35px' color="purple"
                          onClick ={() => setOpen(!open)}
                          />

  const closeMobileMenu = () => setOpen(false);

      return (
        <nav className="mobileNavigation">
          {open ? closeIcon : hamburgerIcon}
          {open && <NavLinks isMobile = {true} closeMobileMenu = {closeMobileMenu}/>}
        </nav>
      )
    }
    
export default MobileNavigation;